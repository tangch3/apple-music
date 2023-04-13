import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index.js';

chai.use(chaiHttp)
const expect = chai.expect;


// GET ALL MEDIA FOR COLDPLAY -> CALLING ITUNES API
describe("Test to return a user search for Coldplay", () => {
    it('should return a 200 status code for the homepage', (done) => {
        chai.request(app)
        .get('/home/coldplay/all')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done()
        })
    })
})

// GET THE SAVED MEDIA BY THE USER
describe("Test to return the saved contents by a user", () => {
    it('should return a 200 status code for the homepage', (done) => {
        chai.request(app)
        .get('/saved')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done()
        })
    })
})

// GET THE SAVED MEDIA BY THE USER
describe("Test to return the saved contents by a user", () => {
    it('should return a 200 status code for the homepage', (done) => {
        chai.request(app)
        .get('/saved')
        .end((err, res) => {
            expect(res).to.have.status(200);
            done()
        })
    })
})

