const request = require('request')

const getData = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };


    const apiResponse = await request('https://testurl/data', options,(req,res)=>{
        console.log('res',res)
        return res
    })
    const loginResponse = await apiResponse.json();

    return loginResponse;
}

module.exports = {getData}