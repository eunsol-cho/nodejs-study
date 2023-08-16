const express = require("express");
const app = express();
let posts = []; // 게시글 리스트, 재할당 되어야해서 let으로 선언

// request body 사용시 JSON 미들웨어 필요!
// 사용하지 않으면 undefined로 반환
app.use(express.json()); // JSON 미들웨어 활성화
// app.use : 미들웨어 활성화 함수
// - 요청과 응답 사이에 전후 처리 지원
// - ex. 요청시마다 로그를 남기는 미들웨어

// POST 요청시 컨텐트타입이 application/x-www-form-urlencoded인 경우 파싱
app.use(express.urlencoded({ extended: true })); // JSON 미들웨어와 함께 사용
// - POST 요청시 컨텐트타입이 대게 application/x-www-form-urlencoded
// - body에 키=값&키2=값2 ... 형태의 데이터가 들어오면 object로 변경해줌


// 게시글 조회
app.get("/", (req, res) => {
    res.json(posts); // 리스트 타입 반환
    // res.end : 문자열 or 바이트 버퍼 형식만 가능
});

// 게시글 등록
app.post("/posts", (req, res) => {
    // HTTP 요청의 body 데이터를 변수에 할당
    const { title, name, text } = req.body;
    // 객체타입은 비구조화 할당이 가능. urlencoded 미들웨어가 객체로 변환

    // 게시글 추가
    posts.push({ id: posts.length + 1, title, name, text, createdDt: Date()});
    res.json({ title, name, text });
});

// 게시글 삭제
app.delete("/posts/:id", (req, res) => {
    const id = req.params.id; // path에서 id 가져옴. 문자열로 할당함. 
    const filteredPosts = posts.filter((post) => post.id !== +id); // 삭제. +id : 문자열을 숫자형으로 변경
    const isLengthChanged = posts.length !== filteredPosts.length; // 삭제확인
    posts = filteredPosts;
    if (isLengthChanged) {
        res.json("OK"); // 성공
        return;
    }
    res.json("NOT CHANGED"); // 실패
});


app.listen(3000, () => {
    console.log("welcom POST start!");
});