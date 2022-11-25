const request = require('request')

const addData = async ({data}) => {

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({data:data})
    };


    const apiResponse = await request('https://testurl/data', options,(req,res)=>{
        console.log('res',res)
        return res
    })
    const addedData = await apiResponse.json();

    return addedData;
}

module.exports = {addData}