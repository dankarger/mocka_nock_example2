const nock = require('nock');
const request = require('supertest')("http://api.postcodes.io&quot;");
const expect = require('chai').expect;

describe("Testing API with a mocked backend", function () {

    it("returns a successful mocked response", function (done) {

        //specify the url to be intercepted
        nock("http://api.postcodes.io&quot;")
            //define the method to be intercepted
            .get('/postcodes/')

            //respond with a OK and the specified JSON response
            .reply(200, {
                "status": 200,
                "message": "This is a mocked response",

            }).get('/postcodes/')
            //simulate a 10 second delay
            .delayBody(10000)
            .reply(200, {
                "status": 200,
                "message": "This simulates a 10 second delay"
            });

        //perform the request to the api which will now be intercepted by nock
        request
            .get('/postcodes/')
            .end(function (err, res) {
                //assert that the mocked response is returned
                expect(res.body.status).to.equal(200);
                expect(res.body.message).to.equal("This is a mocked response");
                done();
            });
    })


});

describe("Testing API with a mocked backend", function () {
    this.timeout(60000);
    it("returns a successful mocked response -- with delay", function (done) {
        // beforeEach(done => setTimeout(done, 60000));
        //override the mocha timeout in this test to 60 seconds
        // this.timeout(60000);

        //setup mocked backend for a specific end point
        nock("http://api.postcodes.io&quot")
            .get('/postcodes/')
            //simulate a 10 second delay
            .delayBody(10000)
            .reply(200, {
                "status": 200,
                "message": "This simulates a 10 second delay"
            });

        //perform the request to the api which will now be intercepted by nock
        request
            .get('/postcodes/')
            .end(function (err, res) {
                expect(res.body.status).to.equal(200);
                expect(res.body.message).to.equal("This simulates a 10 second delay");
                done();
            });
    })
});