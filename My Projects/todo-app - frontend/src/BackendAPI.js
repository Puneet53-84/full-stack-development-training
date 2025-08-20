import axios from 'axios'

const host = "http://localhost:3000"

async function callCreateAPI(apiPath ,body) {
        return await axios.post(host+ apiPath, body)
        .then (response => {
                console.log(`callCreateAPI response ${JSON.stringify(response.data)}`);
                return response.data;
        })
        .catch(error => {
            alert(`api call got failed,error ${error}`);
            return null;
        })
}

async function callGetAllAPI(apiPath) {
    return await axios.get(host+apiPath)
    .then(response => {
        console.log(`callGetAllAPI response ${JSON.stringify(response.data)}`);
                return response.data;
    })
    .catch(error => {
            alert(`callGetAllAPI call got failed,error ${error}`);
        })
}

async function callGetAPI(apiPath,params) {
    return await axios.get(host+apiPath,{'params' : params})
    .then(response => {
        console.log(`callGetAPI response ${JSON.stringify(response.data)}`);
        return response.data;
    })
    .catch(error => {
            alert(`callGetAPI call got failed,error ${error}`);
        })
}

async function callUpdateAPI(apiPath,body,params) {
    return await axios.patch(host+apiPath,body,{'params' : params})
    .then(response => {
        console.log(`callUpdateAPI response ${JSON.stringify(response.data)}`);
        return response.data;
    })
    .catch(error => {
            alert(`callUpdateAPI call got failed,error ${error}`);
        })
}

async function callDeleteAPI(apiPath, params) {
    return await axios.delete(host + apiPath, { 'params': params })
        .then(response => {
            console.log(`callDeleteAPI response ${JSON.stringify(response.data)}`)
            return response.data;
        })
        .catch(error => {
            alert(`callDeleteAPI call got failed, error ${error}`);
        })
}
export {callCreateAPI , callGetAllAPI , callGetAPI , callUpdateAPI , callDeleteAPI}