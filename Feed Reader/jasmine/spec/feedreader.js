/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('are defined', function() {
             expect(allFeeds).toBeDefined();
             expect(allFeeds.length).not.toBe(0);
             });


         /* Iterates over allFeeds array and makes sure each object has a url property
            ALso makes sure that the url property has a value and is not 0
         */
         it("url defined", function() {
             for(var i = 0;i < allFeeds.length;i++){
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
             }});


         /* Iterates over allFeeds array and makes sure each object has a name property
           Also makes sure that the name property has a value and is not 0
         */
         it('name defined and not empty' , function(){
           for(var i = 0; i < allFeeds.length; i++){
             expect(allFeeds[i].name).toBeDefined();
             expect(allFeeds[i].name.length).not.toBe(0);
              }
           });
      });


    describe("The Menu", function() {
         /* This test is to see if the body container in index.html has a class of "menu-hidden"
         */
         it("menu hidden", function() {
           expect($('body').hasClass('menu-hidden')).toBe(true);
            });
         /* This test is to see if when the  menu icon is clicked it will remove the menu-hidden class from the body container
            and adds the class back when it is clicked again.
         */
         it('visibilty on click', function(){
            //When the menu icon is clicked, it makes sure that the class that makes it hidden is removed
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            //When the same menu icon is clicked again, it makes sure that the class that makes the menu hidden is added back
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });


    describe("Initial Entries", function () {
        /* This test will check to see that when the asynchronous function loadFeed in app.js finishes
           that there is one entry element in the feed container.
        */
        beforeEach(function(done) {
           loadFeed(0, done);
          });

         it('At least a one .entry element in the .feed container', function(){
           expect($('.feed .entry').length).toBeGreaterThan(0);
      });
    });


    describe("New Feed Selection", function(){


        var initFeed;
        /* This test checks checks to see that new content is loaded when the loadFeed function finishes.
           It tests this by checking a loadFeed with the ID of 1 and a loadFeed with the ID of 2 and testing
           to see that they are not equal.
        */
         beforeEach(function(done) {
           loadFeed(1, function() {
           initFeed = $(".feed").html();
              });
           done();
          });

         it("The feed content changed", function(done){
           loadFeed(2, done);
           expect($(".feed").html()).not.toEqual(initFeed);
         });
     });
}());
