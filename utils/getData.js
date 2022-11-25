const axios = require('axios')

const getData = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };


    const apiResponse = await axios.get('https://testurl/data' )



    const response = await apiResponse;
    // console.log('1111111',response.status)
    return response;
}

module.exports = {getData}