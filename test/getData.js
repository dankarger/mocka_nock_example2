const assert = require('assert');
const chai = require('chai')
const expect = chai.expect;
const nock = require('nock')
const {getData} = require('../utils/getData')

const scope = nock('https://testurl')
    .get('/data')
    .reply(200, {
        data: {
            key: 'mit',
            data1: 'hello',
            id: '12hello',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
        },
    })
describe('test getData', function() {
    it("except getData to have  data1", async () => {

        const data = await getData();
        console.log('data',data)
        // expect(data).to.have.property('data1').to.equal('hello');

    })
})

