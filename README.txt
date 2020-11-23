The following modules need to be installed from npm in order for the NewsServiceAPI to work properly.

Modules required:
express
bunyan-request-logger
express-error-handler
uuid

There is a package.json file included.


*** TESTING ***

For predictable results, make sure that you place a blank persistencestore.json file in the same
directory as the NewsServiceAPI.js program. You can also delete the persistencestore.json file.

The Postman requests have been exported to a file named NewsService_test.json.

The easiest way to run the tests is to use the Collection Runner in Postman to run the 
"NewsService_test Lab 6" collection. If you choose to submit the Postman requests manually, then 
the results will be more unpredictable.

STEPS FOR TESTING:
1. Place a blank persistencestore.json file in the same directory as the NewsServiceAPI.js program.
2. Start or restart NewsServiceAPI.js.
3. Import the "NewsService_test Lab 6" collection into Postman using the NewsService_test.json file.
4. Run Postman Runner for the "NewsService_test Lab 6" collection.
5. To rerun the tests, repeat steps 1-4.


Variables:
1. idToDelete - the ID of the story to delete. 
The '/stories' endpoint will return a JSON object with a href from a POST request. The href is the
URL to use for identifying a story. You can use the ID part of the href for a DELETE request to 
delete that particular story.
2. idToRetrieve - the ID of the story to retrieve for the "get story by id" request

NOTE: These variables exist because the ID's for the stories are random numbers.
So they will be different every time a new story is created and persisted.



These Postman requests can be used to set up stories:
1. testR1 - create one story
2. setUpMultipleStories - write multiple stories in one request
3. setUpMoreStoriesOfSameAuthors - write multiple stories with same authors as ones from the 
   setUpMultipleStories request

Here are the Postman requests for testing:
1. testR1 - Test R1 by creating one story
2. testR2 - Test R2 by changing the headline of the story created from testR1
3. testR3 - Test R3 by changing the content of the story from testR2
4. testR4 - Test R4 by deleting the story with a specific ID. The ID is the value of the idToDelete
   Postman variable.
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

14. testR7 - Test R7 by looking for a story with a specific ID. The ID is the value of
    the idToRetrieve Postman variable.


*** EXTRA CREDIT ***
I put my implementations for EC1 and EC2 in a subdirectory called EC.

My private key is in a file called dlee129-key.pem.
My self-signed certificate is in a file called dlee129-cert.pem.

The key files are in the EC subdirectory as well. The NewsServiceAPI.js will look for the 
persistencestore.json file in the EC directory.

NOTE: Since the certificate is self-signed, you need to disable SSL certificate verification in Postman
for submitting requests using HTTPS.
