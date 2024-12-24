import axios from "axios";

const instance = axios.create({
    baseURL: "https://us-central1-clone-f881b.cloudfunctions.net/api",

});
export default instance;