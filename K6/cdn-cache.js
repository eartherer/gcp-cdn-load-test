import http from 'k6/http';
import { check, sleep } from 'k6';

const host = "xxx"
const port = 8080
const path = "/cache/simpleconfig"

export const options = {
    vus: 300,
    duration: '3m',
};

export default function () {
    const res = http.get(`http://${host}:${port}${path}`);
  check(res, { 'status was 200': (r) => r.status == 200 });
  sleep(1);
}
