import {httpClient} from "./HttpClient";

export function allAlarm() {
    return httpClient.get('/api/alarm');
}