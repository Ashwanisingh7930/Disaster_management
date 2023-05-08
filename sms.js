var request = require("request");
var options = { method: 'POST',
url: 'https://enterprise.smsgupshup.com/GatewayAPI/rest',
form:
{ method: 'sendMessage',
send_to: '919820XXXXXX',
msg: 'This is sample test message from GupShup',
msg_type: 'TEXT',
userid: 'XXXXXX',auth_scheme: 'PLAIN',
password: 'XXXXX',
format: 'JSON' } };
request(options, function (error, response, body) {
if (error) throw new Error(error);
console.log(body);
});