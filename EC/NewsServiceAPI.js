'use strict'

const { NewsStory, NewsService } = require('./NewsService.js');
const url = require('url');
const tls = require('tls');
const fs = require('fs');

const newsService = new NewsService();

let express = require('express'),
    https = require('https'),
    logger = require('bunyan-request-logger'),
    errorHandler = require('express-error-handler'),
    app = express(),
    log = logger(),
    server,
    port = 3000;

const options = {
    key: fs.readFileSync('dlee129-key.pem'),
    cert: fs.readFileSync('dlee129-cert.pem')
};
    
app.use(express.json());
app.use(express.urlencoded());
app.use(log.requestLogger());

const STORIES_PATH = '/stories';
const STORIES_BY_ID_PATH = STORIES_PATH + '/:id';
const TITLE_PATH = '/titles';
const CONTENT_PATH = '/content';

function createStory(obj) {
    let story = new NewsStory(obj);
    newsService.writeNewsStory(story);
    
    // let id = newsService.findIndex(story.headline);
    return { story: story, id: story.id };
}

// POST    /stories    -> create, return URI
// This is the endpoint to use for explicitly creating a new story
// The payload for the POST request looks like:
// {
//     "author": "author name",
//     "headline": "title of the story",
//     "public": true|false,
//     "content": "content of the story",
//     "date": "yyyy-MM-dd"
// }
app.post(STORIES_PATH, function (req, res, next) {
    if (!Array.isArray(req.body)) {
        let obj;
        try {
            obj = createStory(req.body);
            res.send(201, {
                id: obj.id,
                href: '/stories/' + obj.id
            });
        } catch (e) {
            return res.send(500, {
                message: err.message
            });
        }
    } else {
        let storiesArray = req.body;
        let returnArray = [];
        try {
            storiesArray.forEach((element) => {
                let obj = createStory(element);
                returnArray.push({
                    href: '/stories/' + obj.id,
                    properties: {
                        id: obj.id,
                        author: obj.story.author,
                        headline: obj.story.headline,
                        public: obj.story.public,
                        content: obj.story.content,
                        date: obj.story.date
                    }
                });
            });
        } catch (e) {
            return res.send(500, {
                message: err.message
            });
        }
        res.send(returnArray);
    }
});

// PUT    /stories/:id    -> create or update
// This is the endpoint to use if you want to use only one call to either 
// create or update a story. If you specify an ID that doesn't exist, then you
// create a new story, otherwise this call will update the existing story
// identified by the ID specified in the URL.
//
// The payload for the PUT request looks like:
// {
//     "author": "author name",
//     "headline": "title of the story",
//     "public": true|false,
//     "content": "content of the story",
//     "date": "yyyy-MM-dd"
// }
app.put(STORIES_BY_ID_PATH, function (req, res) {
    let story = new NewsStory(req.body),
        id = req.params.id,
        exists = newsService.getById(id);
    newsService.setStory(id, story);
    if (exists) {
        return res.send(204);
    }
    
    // make sure that id is valid
    id = newsService.findIndex(story.headline);
    res.send(201, {
        href: '/stories/' + id
    });
});

// PUT    /titles    -> update
// This is the endpoint to use for updating a title of an existing story
// The payload for the PUT request looks like:
// {
//     "author": "author name",
//     "oldHeadline": "existing headline",
//     "newHeadline": "new headline to change it to"
// }
app.put(TITLE_PATH, function (req, res, next) {
    let author = req.body.author,
        oldHeadline = req.body.oldHeadline,
        newHeadline = req.body.newHeadline,
        exists = newsService.findIndexByAuthorAndHeadline(author, oldHeadline) != -1;
    if (exists) {
        newsService.editTitle(author, oldHeadline, newHeadline);
        return res.send(204);
    } else {
        let err = new Error('Story not found');
        err.status = 404;
        return next(err);
    }
});

// PUT    /content    -> update
// This is the endpoint to use for updating the content of an existing story
// The payload for the PUT request looks like:
// {
//     "author": "author name",
//     "headline": "existing headline",
//     "newContent": "new content"
// }
app.put(CONTENT_PATH, function (req, res, next) {
    let author = req.body.author,
        headline = req.body.headline,
        newContent = req.body.newContent,
        newsStory = newsService.get(headline);
    if (newsStory) {
        newsStory.content = newContent;
        newsService.updateContent(newsStory);
        return res.send(204);
    } else {
        err = new Error('Story not found');
        err.status = 404;
        return next(err);
    }
})

// DELETE    /stories/:id    -> destroy
// This is the endpoint to use for deleting a news story
// The ID of the story to delete is specified in the URL
app.delete(STORIES_BY_ID_PATH, function (req, res, next) {
    let id = req.params.id,
        body = newsService.getById(id),
        err;
    if (!body) {
        err = new Error('Story not found');
        err.status = 404;
        return next(err);
    }
    newsService.delete(body.headline);
    res.send(204);
});

// GET    /stories    -> retrieve
// This is the endpoint to use for searching for news stories by specifying
// a filter. The filters are given as query parameters:
// headline = a substring of the title
// dateFrom = starting date of a date range
// dateTo = ending date of a date range
// author = author name 
//
// If no filter is specified, returns a list of all stories
app.get(STORIES_PATH, function (req, res, next) {
    let queryObject = url.parse(req.url, true).query,
        filteredStories;
    if (!queryObject || !Object.keys(queryObject).length) {
        let index = newsService.getStories().map(function (story) {
            return {
                href: '/stories/' + story.id,
                properties: {
                    id: story.id,
                    author: story.author,
                    headline: story.headline,
                    public: story.public,
                    content: story.content,
                    date: story.date
                }
            };
        });
        res.send(index);
    } else {
        try {
            filteredStories = newsService.filter(queryObject);
        } catch (err) {
            return res.send(500, {
                message: err.message
            });
        }
        sendObject(filteredStories, res);
    }
});

function sendObject(obj, res, next) {
    if (!obj) {
        let err = new Error('Story not found');
        err.status = 404;
        return next(err);
    }
    res.send(200, obj);
}

// GET    /stories/:id    -> show
// Return a story that corresponds to the specified ID
app.get(STORIES_BY_ID_PATH, function (req, res, next) {
    let id = req.params.id,
        body = newsService.getById(id);
    sendObject(body, res, next);
});

// Send available options on OPTIONS requests
app.options(STORIES_PATH, function (req, res) {
    res.send(['GET', 'PUT', 'DELETE', 'OPTIONS']);
});

// Deliver 405 errors if the request method isn't defined
app.all('/stories', errorHandler.httpError(405));

// Deliver 404 errors for any unhandled routes
// Express has a 404 handler built-in, but it
// won't deliver errors consistent with our API
app.all('*', errorHandler.httpError(404));

// Log errors
app.use(log.errorLogger());

// Create the server
server = https.createServer(options, app);

// Handle errors. Pass the server
// object into the error handler, so it can be
// shut down gracefully in the event of an 
// unhandled error.
app.use(errorHandler({
    server: server
}));

server.listen(port, function() {
    console.log('Listening on port ' + port);
});
