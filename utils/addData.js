const axios = require('axios')

const addData = async ({data}) => {

    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify({data:data})
    };


    const apiResponse = await axios.post('https://testurl/add',{
       data:data
    })
    const addedData = await apiResponse;

    return addedData;
}

module.exports = {addData}