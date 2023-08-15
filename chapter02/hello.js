// 1. http 객체 생성
const http = require("http");
let count = 0;

// 2. 서버 객체생성
const server = http.createServer((req, res) => {
    log(count);
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/pain");
    res.write("hello\n");
    setTimeout(() => {
        res.end("Node.js");
    }, 2000);
});

function log(count) {
    console.log((count += 1));
}

// 8000번 포트로 서버실행
server.listen(8000);