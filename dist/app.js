"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
// get
app.get('/', function (req, res) {
    res.send('hello express');
});
app.get('/posts', function (req, res) {
    res.json([
        { id: 1, content: 'hello' },
        { id: 2, content: 'hello2' },
        { id: 3, content: 'hello3' },
    ]);
});
// Express Router 적용하기
// 3010 포트로 서버 실행
app.listen(3010, function () {
    console.log('실행중');
});
