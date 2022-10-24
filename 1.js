
/**
 * @fileoverview Template to compose HTTP reqeuest.
 * 
 */

const url = `https://ycact.bzh001.com/v2/act/shopping202207/Exchange`;
const method = `POST`;
const headers = {
'csrf' : `6356167e8734c`,
'Connection' : `keep-alive`,
'Accept-Encoding' : `gzip, deflate, br`,
'Content-Type' : `application/json`,
'Origin' : `https://ycact.bzh001.com`,
'User-Agent' : `Mozilla/5.0 (iPhone; CPU iPhone OS 14_8 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.28(0x18001c2e) NetType/WIFI Language/zh_CN`,
'Cookie' : `WEBID=ca1bd67cf5d2d8417c816ed9; Hm_lvt_0bfa99c78a7cb661d2dc5565d423e390=1665545556,1666147224,1666227405,1666231088`,
'Host' : `ycact.bzh001.com`,
'Referer' : `https://ycact.bzh001.com/202207/index.html`,
'Accept-Language' : `zh-cn`,
'Accept' : `application/json, text/plain, */*`
};
const body = `{"params":[1]}`;

const myRequest = {
    url: url,
    method: method,
    headers: headers,
    body: body
};

$task.fetch(myRequest).then(response => {
    console.log(response.statusCode + "\n\n" + response.body);
    $done();
}, reason => {
    console.log(reason.error);
    $done();
});
