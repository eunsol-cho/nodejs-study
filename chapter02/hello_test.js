import http from "k6/http";

// 1 성능 테스트 옵션값 : 100명이 10초동안 요청
export const options = {
    vus: 100, // 가상유저 명수
    duration: "10s", // 테스트 시간
};

// 2. 테스트에서 사용할 함수
export default function () {
    http.get("http://localhost:8000");
}