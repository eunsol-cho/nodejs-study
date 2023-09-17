
function myWork(work) {
    return new Promise((resolve, reject) => {
        resolve(work.toUpperCase())
    })
}

function playGame(work) {
    return new Promise((resolve, reject) => {
        if (work === 'DONE') {
            resolve('GO PLAY GAME');
        } else {
            reject(new Error("DON'T"));
        }
    })
}

// [안좋은예] 프로미스 중첩
// - 가독성이 좋지 않다.
myWork('done')
    .then(function (result) {
        playGame(result).then(function (val) {
            console.log(val);
        });
    })

// [좋은예] 결과를 then으로 넘김
myWork('done')
.then(playGame)
.then(console.log)