The following modules need to be installed from npm in order for the NewsServiceAPI to work properly.

Modules required:
express
bunyan-request-logger
express-error-handler

There is a package.json file included.


TESTING

For predictable results, make sure that you place a blank persistencestore.json file in the same
directory as the NewsServiceAPI.js program. You can also delete the persistencestore.json file.

The Postman requests have been exported to a file named NewsService_test.json.

Variables to set:
1. idToDelete - the ID of the story to delete. The '/stories' endpoint will
return a JSON object with a href from a POST request. The href is the URL to 
use for identifying a story. You can use the ID part of the href for a DELETE
request to delete that particular story.

These Postman requests can be used to set up stories:
1. testR1 - create one story
2. setUpMultipleStories - write multiple stories in one request
3. setUpMoreStoriesOfSameAuthors - write multiple stories with same authors as ones from the 
   setUpMultipleStories request

Here are the Postman requests for testing:
1. testR1 - Test R1 by creating one story
2. testR2 - Test R2 by changing the headline of the story created from testR1
3. testR3 - Test R3 by changing the content of the story from testR2
4. testR4 - Test R4 by deleting the story 0
5. testR2WithNonExistingItem - Test R2 with a headline that doesn't exist. The
   expected response is a 404.
6. testR5a - Test R5 by looking for stories with headlines with 'A'.

The following requests test R5b
7. testDateFromFilter - Test R5b by looking for stories written from May 10, 2000.
8. testDateToFilter - Test R5b by looking for stories written up to Sep 9, 2013.
9. testDateRangeFilter - Test R5b by looking for stories written between 
   Mar 24, 1992 and Mar 12, 2002.

10. testR5c - Test R5c by looking for stories written by Li Zhou.
11. testR5ac - Test R5a and R5c by looking for stories with headlines with 'in'
    and written by David Goodman.
12. testR5abc error in query syntax - Test R5 by submitting invalid syntax for
    the query.
13. testR5abc v2 - Test R5 by looking for stories with headlines with 'g'
    and written by Caitlin McFall and written between Sep 29, 2017 and Dec 9, 2020.
