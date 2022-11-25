
const getData = async () => {

    const options = {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    };


    const apiResponse = await fetch('https://testurl/data', options)
    const loginResponse = await apiResponse.text();

    return loginResponse;
}

module.exports = {getData}