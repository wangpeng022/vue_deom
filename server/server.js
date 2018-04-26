let express = require("express");
let bodyParser = require('body-parser');
let session = require('express-session');
let app = express();
app.use(bodyParser.json());
app.use(session({
    resave: true,//每次访问都重新保存session
    saveUninitialized: true,//保存未初始化的session
    secret: 'persagy'//密钥
}));
app.use(bodyParser.json());
app.use(function (req, res, next) {
    //允许的来源
    res.header('Access-Control-Allow-Origin', 'http://192.168.100.81:8081');
    //允许客户端请求的方法
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    //允许客户端发送的请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //允许客户端发送Cookie
    res.header('Access-Control-Allow-Credentials', "true");
    //当客户端发向服务器发post跨域的时候，会先发送OPTIONS请求。如果服务器返回的响应头Access-Control-Allow-Methods里有POST的话，才会再次发送POST请求
    if (req.method == 'OPTIONS') {
        res.end();
    } else {
        next();
    }
});
let CPHeartBeatService = require('./CPHeartBeatService.json');
let CPSystemListService = require('./CPSystemListService.json');
let states0 = require('./states0.json');
let states1 = require('./states1.json');
let states2 = require('./states2.json');
let states3 = require('./states3.json');
let states4 = require('./states4.json');

app.post("/CPHeartBeatService", function (req, res) {
    res.json(CPHeartBeatService);
});
app.post('/CPSystemListService', function (req, res) {
    res.json(CPSystemListService);
});

app.post('/CPSystemStatusService', function (req, res) {
    let code = req.body.data;
    switch (code) {
        case 0:
            res.json(states0);
            break;
        case 1:
            res.json(states1);
            break;
        case 2:
            res.json(states2);
            break;
        case 3:
            res.json(states3);
            break;
        case 4:
            res.json(states4);
            break;

        default:
            break;
    }

});

app.listen(3000, function () {
    console.log("端口 3000")
});