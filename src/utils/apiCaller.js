import axios from 'axios';
import * as config from './../const/config';
export default async function callAPI(endpoint, method = 'get', body){
    try {
        return axios({
            method: method,
            url: `${config.apiURL}/${endpoint}`,
            data: body,
        });
    }
    catch (err) {
        console.log(err);
    }
};