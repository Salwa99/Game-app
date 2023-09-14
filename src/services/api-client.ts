import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '02de74c8abf7454284d107ea8f44dbcc',
    }
})