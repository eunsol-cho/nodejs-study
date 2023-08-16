// 1. express 패키지 로딩
const express = require("express");

// 2. express 인스턴스 생성
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.set({"Content-Type": "text/html; charset=utf-8"});
    res.end("헬로 Express");
});

app.listen(port, () => {
    console.log(`START SERVER : use ${port}`);
});