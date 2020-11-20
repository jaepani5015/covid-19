import axios from 'axios';

export const foreignApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_FOREIGN')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}

export const foreignTodayApi = () => {
    const res = axios.get('http://localhost:5000/openapi/HOST_FOREIGN_TODAY')
        .then(data => data)
        .catch(e => console.log('error : ', e));
    return res;
}