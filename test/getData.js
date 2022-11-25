const assert = require('assert');
const chai = require('chai')
const expect = chai.expect;
const nock = require('nock')
const {getData} = require('../utils/getData')
const {addData} = require("../utils/addData");

const scope = nock('https://testurl')
    .get('/data').times(3)
    .reply(200, {
        data: {
            key: 'mit',
            data1: 'hello',
            id: '12hello',
            url: 'https://api.github.com/licenses/mit',
            node_id: 'MDc6TGljZW5zZTEz',
        },
    }).post('/add',{data:'testData'}).reply(200,{
        message:"data added"
    })


describe('test getData', function() {
    it("except getData to status of 200", async () => {

        const res = await getData()
        const data = res
        // console.log('data1212',data)
        expect(data).to.have.property('status').to.equal(200);

    })

    it("except getData to have  data1", async () => {

        const res = await getData()
        // console.log('2',res.data.data)
        const data = res.data.data

        expect(data).to.have.property('data1').to.equal('hello');

    })
    it("except getData to have  id of '12hello' ", async () => {

        const res = await getData()
        const data = res.data.data
        expect(data).to.have.property('id').to.equal('12hello');

    })
})

describe('test addData', function() {
    it("except addData to receive correct message", async () => {

        const response = await addData({data:'testData'});
        console.log('data',response.data)
        const data = response.data
        expect(data).to.have.property('message').to.equal('data added');

    })
})