import { service } from "./fetch";
import ENDPOINTS from "./endpoints";

export function getData(channel, value) {
    return service
        .get(ENDPOINTS.getData(channel, value))
        .then((res) => res.data)
        .catch((err) => Promise.reject(err));
}

export function generateReport(htmlString) {
    return service
        .post(ENDPOINTS.generateReport(), {
            html_string: htmlString,
        },
            {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/pdf'
            }
        })
        .then((res) => res.data)
        .catch((err) => Promise.reject(err));
}