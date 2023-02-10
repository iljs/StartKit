import axios from "axios";
import {Config} from "./config.js";

export async function create(token, mail, password, name, surname, rights){
    const res = (await axios.post(`${Config.server}/api/user/auth`, {
        name: name,
        surname: surname,
        mail: mail,
        password: password,
        rights: rights
    }, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.data : res.code
    }
}

export async function auth(mail, password){
    const res = (await axios.get(`${Config.server}/api/user/auth`, {
        params:{
            mail: mail,
            password: password
        }
    })).data;

    console.log(res);

    return {
        status: res.status,
        data: (res.status == "Success") ? res.token : res.code
    }
}

export async function authToken(token){
    const res = (await axios.get(`${Config.server}/api/user/authToken`, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.token : res.code
    }
}

export async function getMyInfo(token){
    const res = (await axios.get(`${Config.server}/api/user/getMyInfo`, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.data : res.code
    }
}

export async function getUsers(token){
    const res = (await axios.get(`${Config.server}/api/user/getUsers`, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.data : res.code
    }
}

export async function getUser(token, id){
    const res = (await axios.get(`${Config.server}/api/user/get/${id}`, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.data : res.code
    }
}

export async function updateUser(token, id, mail, password, name, surname, rights){
    const res = (await axios.put(`${Config.server}/api/user/update/${id}`, {
        name: name,
        surname: surname,
        mail: mail,
        password: password,
        rights: rights
    }, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.data : res.code
    }
}

export async function deleteUser(token, id){
    const res = (await axios.delete(`${Config.server}/api/user/delete/${id}`, {
        headers: {
            "Authorization": token 
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? res.data : res.code
    }
}