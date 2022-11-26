const assert = require('assert');
const chai = require('chai')
const expect = chai.expect;
const nock = require('nock')
const should = chai.should


function asyncMethod(method) {
    const result =  new Promise((resolve,reject) =>{
        setTimeout(()=>{
           // return   method==='resolve' ? resolve(true) : reject(false) ;
            resolve(true)


        },1000)

      })
    result.then((res)=>{
        console.log(res)
        return res
    })
    return result
}



describe('Async Test', () => {
    // 1) using done()
    it('should  pass', function (done) {
        asyncMethod('resolve')
            .then(() => {
                done();
            })
    })
    // it('should not pass 1 ', function (done) {
    //     asyncMethod('reject')
    //         .then((result) => {
    //             assert.ok(result)
    //     })
    // })
    // //2) using async/await
    // it('should not pass 2', async function (done) {
    //     await asyncMethod('reject')
    //         assert.equal(true, true)
    // })
    // it('should not pass 3', async function (done) {
    //     await asyncMethod('reject')
    //         .then(()=> {
    //             assert.equal(false, false)
    //             done()
    //         })
    //
    // })
    //
    // it('should  pass 4', async function (done) {
    //      let result = await asyncMethod('resolve')
    //        result.should.equal(true)
    //          console.log('r',result)
    //          // assert.equal(result, true)
    //     // assert.ok(result)
    //
    //
    //     // console.log(result)
    //
    //
    // })
})


