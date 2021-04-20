import axios from 'axios';

export default axios.create({
    baseURL :'https://api.unsplash.com',
    headers :{
        Authorization:'Client-ID rWgiGnc4Zy9p-HJzXtQ4coqVkVeCd2RbRowcfa2yD7c'}

    });