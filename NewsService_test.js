const { NewsStory, NewsService } = require('./NewsService.js');

let allPassed = true;
let newsService;
let newsStory;

const story1Headline = "A group of centrist lawmakers has a new compromise proposal for more stimulus";
const story2Headline = "Ukraine backs opposition forces against Belarusian president";
const story3Headline = "Nicaragua, Venezuela offer asylum to Snowden";
const story4Headline = "Magic's not back yet at Disney: Analysts";
const story5Headline = "Six Kids Die in Detroit House Fire";
const story6Headline = "McEnroe routs Lendl";
const story7Headline = "Bush Decries Exxon Valdez Spillage of 'Precious, Precious' Oil";
const story8Headline = "Ouija riot baffles police";
const story9Headline = "Remember Those Few Glorious Minutes When the World Was Free of Trump's Twitter Account?";
const story10Headline = "'I turned away Beatles for just £25'";

function setUp() {
	newsService = new NewsService(true);	// start with no news stories
	newsStory = new NewsStory();
	newsStory.headline = "Wildfires kill eight";
	newsStory.content = "Oregon faces fire conditions unseen in decades";
	newsStory.date = new Date(2020, 8, 10);	// Sep 10, 2020
	newsStory.author = "Li Zhou";
}

function setUpMultipleStories() {
	newsService = new NewsService(true);	// start with no news stories
	// Story 1
	let ns = new NewsStory();
	ns.headline = story1Headline;
	ns.content = "A centrist bipartisan group is trying to break through the stimulus stalemate - and put pressure on Congress to get something done."
		+ " Members of the House Problem Solvers Caucus on Tuesday released what they viewed as an effective compromise offer amid the ongoing impasse between Democratic and Republican negotiators over the next phase of Covid-19 aid.";
	ns.date = new Date(2020, 8, 16);	// Sep 16, 2020
	ns.author = "Li Zhou";
	newsService.writeNewsStory(ns);

	// Story 2
	ns = new NewsStory();
	ns.headline = story2Headline;
	ns.content = "Ukrainian lawmakers joined Western countries in condemning the recent presidential election in Belarus by passing a motion that would enforce future sanctions against individuals involved in fixing elections and using violence against demonstrators.";
	ns.date = new Date(2020, 8, 15);	// Sep 15, 2020
	ns.author = "Caitlin McFall";
	newsService.writeNewsStory(ns);

	// Story 3
	ns = new NewsStory();
	ns.headline = story3Headline;
	ns.content = "Presidents Daniel Ortega of Nicaragua and Nicolas Maduro of Venezuela said Friday they were willing to grant asylum to NSA leaker Edward Snowden.";
	ns.date = new Date(2013, 6, 5);	// Jul 5, 2013
	ns.author = "Associated Press";
	newsService.writeNewsStory(ns);

	// Story 4
	ns = new NewsStory();
	ns.headline = story4Headline;
	ns.content = "Michael Eisner's efforts to slash costs and pump up revenue at Disney may have stabilized earnings, but some analysts insist that the road ahead is still bumpy."
		+ " Morgan Stanley Dean Witter's Richard Bilotti warned in a report yesterday that he 'continues to be cautious about the stock,' which he 'anticipates could tread water for about six months.'"
		+ " Bilotti remains pessimistic about the future of the media empire, which he says is susceptible to the economy and would likely be affected by any economic slowdown."
		+ " Meanwhile, Prudential Securities' media analyst Katherine Styponais says the Magic Kingdom 'still [has] a ways to go until we see a turnaround.'"
		+ ' "There are a couple of businesses that we will continue to keep an eye on - particularly their consumer products division."'
		+ ' "We continue to put a \'hold\' on Disney until we see stronger results," Styponais said.';
	ns.date = new Date(1999, 8, 28);	// Sep 28, 1999
	ns.author = "Allyson Lieberman";
	newsService.writeNewsStory(ns);

	// Story 5
	ns = new NewsStory();
	ns.headline = story5Headline;
	ns.content = "Six children died in a fire at their grandmother's home Sunday while their mother was at a hospital after having a baby."
		+ " The fire rushed up a stairway and trapped the children in two upstairs bedrooms."
		+ ' Their grandmother and three others escaped.'
		+ ' The fire started in a living room closet and appeared accidental, but its cause was not yet known, fire Lt. Katrina Butler said.'
		+ ' "Oh God, no! No! No!," neighbor Carolyn King screamed, falling to her knees as coroners\' workers carried the first of six body bags from the home.';
	ns.date = new Date(1998, 11, 27);	// Dec 27, 1998
	ns.author = "David Goodman";
	newsService.writeNewsStory(ns);

	// Story 6
	ns = new NewsStory();
	ns.headline = story6Headline;
	ns.content = "John McEnroe settled his grudge duel with Ivan Lendl in straight sets and Chris Lewis survived a 3-hour, 45-minute marathon against Kevin Curren yesterday to advance to tomorrow's final in the $1.4 million Wimbledon chamnpionships."
		+ " McEnroe, pushed to a tiebreaker in the first set, won it and went to a 7-6, 6-4, 6-4 victory over Lendl.";
	ns.date = new Date(1983, 6, 2);	// Jul 2, 1983
	ns.author = "United Press International";
	newsService.writeNewsStory(ns);
}

function setUpMoreStoriesOfSameAuthors() {
	// Story 7
	let ns = new NewsStory();
	ns.headline = story7Headline;
	ns.content = "In a highly charged White House press conference Friday, President Bush lashed out against Exxon's supertanker spill off the Alaska coast, decrying the company's \"shocking lack of respect for our planet's greatest natural resource: precious, precious oil.\""
		+ ' "What has happened there in Alaska is a tragic, tragic waste of the fossil fuel most dear to my heart," the visibly grieving president said.';
	ns.date = new Date(1989, 2, 25);	// Mar 25, 1989
	ns.author = "Allyson Lieberman";
	newsService.writeNewsStory(ns);

	// Story 8
	ns = new NewsStory();
	ns.headline = story8Headline;
	ns.content = 'The mass hysteria that drove students temporarily berserk at a military-styled private school here yesterday began when several students were playing with a ouija board and suddenly felt that "a spirit took over it," a teacher told the Miami News today.'
		+ ' "Everybody just got carried away and it was a riot," the teacher, Iliana Vicledo, said.'
		+ ' "There were girls crying and screaming that there was a spirit inside (the ouija board)."'
		+ ' Police said they were baffled by the outbreak at the Miami Aerospace Academy, which they said led to "mass hysteria" that had students kicking walls, tearing at doors, talking of witches and screaming about demons.'
		+ ' "The whole school went berserk," said Miami policeman Harry Cunelli.';
	ns.date = new Date(1979, 9, 26);	// Oct 26, 1979
	ns.author = "David Goodman";
	newsService.writeNewsStory(ns);

	// Story 9
	ns = new NewsStory();
	ns.headline = story9Headline;
	ns.content = 'Nov. 2, 2017, is a day that will go down in history.';
	ns.date = new Date(2017, 11, 27);	// Dec 27, 2017
	ns.author = "David Goodman";
	newsService.writeNewsStory(ns);

	// Story 10
	ns = new NewsStory();
	ns.headline = story10Headline;
	ns.content = 'City landlord George, 72, has no regrets.'
		+ ' The man who once turned down the Beatles because they were "too pricey" is still going strong at his pub in Sneinton.'
		+ ' George Dove, 72, landlord of The March Hare on Carlton Road, has never regretted his decision to give the Fab Four the heave-ho.'
		+ " That's because in his 36 years as landlord he's never had trouble drawing the customers.";
	ns.date = new Date(1994, 11, 12);	// Dec 12, 1994
	ns.author = "Caitlin McFall";
	newsService.writeNewsStory(ns);
}

function assertFalse(condition, message) {
	if (condition) {
		console.log(message);
		allPassed = false;
	}
}

function assertFalseLength(expectedLength, actualLength, criteria) {
	assertFalse(actualLength != expectedLength,
		`ERROR: There should be ${expectedLength} filtered stories for ${criteria}, but instead there's ${actualLength}`);
}

function assertFalseHeadline(expectedHeadline, actualHeadline) {
	assertFalse(actualHeadline != expectedHeadline, 
		`ERROR: Filtered story's headline should be [${expectedHeadline}], but instead it's [${actualHeadline}]`);
}

function testWriteNewsStory() {
	setUp();
	newsService.writeNewsStory(newsStory);
	assertFalse(newsService.size() != 1, "ERROR: There must be exactly one news story");
}

function printOutStories(stories) {
	for (let fs of stories) {
		console.log(`${fs.headline} ${fs.date}`);
	}
}

function testR1() {
	testWriteNewsStory();
}

function testR2() {
	testWriteNewsStory();

	let newHeadline = "Wildfires kill ten";
	newsService.updateHeadline(newsStory.headline, newHeadline);
	assertFalse(!newsService.has(newHeadline), `ERROR: There must be a ${newHeadline} story`);
}

function testR3() {
	testWriteNewsStory();

	let newContent = "Unprecedented fire conditions burn more than 900,000 acres";
	newsStory.content = newContent;
	newsService.updateContent(newsStory);

	newsStory = newsService.get(newsStory.headline);
	assertFalse(newsStory.content != newContent, "ERROR: The story's content was not updated");
}

function testR4() {
	testWriteNewsStory();
	assertFalse(!newsService.delete(newsStory.headline), "ERROR: The story was not deleted");
	assertFalse(newsService.has(newsStory.headline), 
		"ERROR: The story is still present in the NewsService");
}

function testR2WithNonExistingItem() {
	testWriteNewsStory();

	let nonExistingHeadline = "non-existing headline";
	let newHeadline = "new headline";
	newsService.updateHeadline(nonExistingHeadline, newHeadline);
	assertFalse(newsService.has(newHeadline) || newsService.has(nonExistingHeadline), 
		`ERROR: Neither ${newHeadline} nor ${nonExistingHeadline} should exist in the NewsService`);
}

function testR5a() {
	setUpMultipleStories();

	let criteria = { headline: 'A' };
	let filteredStories = newsService.filter(criteria);	// should return story 1 and 4
	assertFalseLength(2, filteredStories.length, criteria);
	assertFalseHeadline(story1Headline, filteredStories[0].headline);
	assertFalseHeadline(story4Headline, filteredStories[1].headline);
}

function testDateFromFilter() {
	let dateFromFilter = {
		dateFrom: new Date(2000, 4, 10)	// May 10, 2000
	};
	let filteredStories = newsService.filter(dateFromFilter);	// should return story 1, 2, 3
	assertFalseLength(3, filteredStories.length, dateFromFilter);
	assertFalseHeadline(story1Headline, filteredStories[0].headline);
	assertFalseHeadline(story2Headline, filteredStories[1].headline);
	assertFalseHeadline(story3Headline, filteredStories[2].headline);
}

function testDateToFilter() {
	let dateToFilter = {
		dateTo: new Date(2013, 8, 9)	// Sep 9, 2013
	};
	let filteredStories = newsService.filter(dateToFilter);	// should return story 3, 4, 5, 6
	assertFalseLength(4, filteredStories.length, dateToFilter);
	assertFalseHeadline(story3Headline, filteredStories[0].headline);
	assertFalseHeadline(story4Headline, filteredStories[1].headline);
	assertFalseHeadline(story5Headline, filteredStories[2].headline);
	assertFalseHeadline(story6Headline, filteredStories[3].headline);
}

function testDateRangeFilter() {
	let dateRangeFilter = {
		dateFrom: new Date(1992, 2, 24),	// Mar 24, 1992
		dateTo: new Date(2002, 2, 12)	// Mar 12, 2002
	};
	let filteredStories = newsService.filter(dateRangeFilter);	// should return story 4, 5
	assertFalseLength(2, filteredStories.length, dateRangeFilter);
	assertFalseHeadline(story4Headline, filteredStories[0].headline);
	assertFalseHeadline(story5Headline, filteredStories[1].headline);
}

function testR5b() {
	setUpMultipleStories();
	testDateFromFilter();
	testDateToFilter();
	testDateRangeFilter();
}

function testR5c() {
	let authorFilter = {
		author: "Li Zhou"
	};
	let filteredStories = newsService.filter(authorFilter);	// should return story 1
	assertFalseLength(1, filteredStories.length, authorFilter);
	assertFalseHeadline(story1Headline, filteredStories[0].headline);
}

function testR5ac() {
	let criteria = {
		headline: "in",
		author: "David Goodman"
	};
	setUpMultipleStories();
	setUpMoreStoriesOfSameAuthors();

	let filteredStories = newsService.filter(criteria);	// should return story 5 and 9
	assertFalseLength(2, filteredStories.length, criteria);
	assertFalseHeadline(story5Headline, filteredStories[0].headline);
	assertFalseHeadline(story9Headline, filteredStories[1].headline);
}

function testR5abc() {
	let criteria = {
		headline: "r",
		dateFrom: new Date(2010, 11, 9),	// Dec 9, 2010
		dateTo: new Date(2013, 1, 7),	// Feb 7, 2013
		author: "Caitlin McFall"
	};
	setUpMultipleStories();
	setUpMoreStoriesOfSameAuthors();

	let filteredStories = newsService.filter(criteria);	// should return none
	assertFalseLength(0, filteredStories.length, criteria);

	criteria = {
		headline: "g",
		dateFrom: new Date(2017, 8, 29),	// Sep 29, 2017
		dateTo: new Date(2020, 11, 9),	// Dec 9, 2020
		author: "Caitlin McFall"
	};
	filteredStories = newsService.filter(criteria);	// should return story 2
	assertFalseLength(1, filteredStories.length, criteria);
}

// begin tests
testR1();
testR2();
testR3();
testR4();
testR2WithNonExistingItem();
testR5a();
testR5b();
testR5c();
testR5ac();
testR5abc();
if (allPassed) {
	console.log("All tests passed");
}
