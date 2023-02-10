import axios from "axios";
import {Config} from "./config.js";

export async function uploadFile(file){
    let formData = new FormData();
    formData.append("image", file, file.name)

    const res = (await axios.post(`${Config.server}/api/systemic/uploadFiles`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })).data;

    return {
        status: res.status,
        data: (res.status == "Success") ? (Config.server + res.link) : res.code
    }
}