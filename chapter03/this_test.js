const http = require("http");

const url = require("url");

http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname; // 패스명 할당
    res.setHeader("Content-Type", "text/html; charset=utf-8"); // 한글인코딩

    if (path === "/4") {
        obj.method(); // undefined (예상되는 값: 'hello')
    } else if (path === "/4/arrow") {
        obj_arrow.method();
    } else if (path === "/4/capture") {
        obj_capture.method();
    } else if (path === "/4/bind") {
        obj_bind.method();
    }

})
.listen("3000", () => console.log("this test"));

// 4.
const obj = {
    value: 'hello',
    method: function() {
        setTimeout(function() {
            console.log(this.value);
        }, 1000);
    }
};

// 4-1. arrow 함수 => 해당 값을 갖는 가장 가까운 일반 함수의 값을 사용
const obj_arrow = {
    value: 'hello',
    method: function() {
        setTimeout(() => {
            console.log(this.value);
        }, 1000);
    }
};

// 4-2. 함수내부에서 this 캡쳐
const obj_capture = {
    value: 'hello',
    method: function() {
        var self = this;  
        setTimeout(function() {
            console.log(self.value);
        }, 1000);
    }
};

// 4-3.
const obj_bind = {
    value: 'hello',
    method: function() {
        setTimeout(function() {
            console.log(this.value);
        }.bind(this), 1000);
    }
};