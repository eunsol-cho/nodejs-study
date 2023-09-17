function myWork(work) {
    return new Promise((resolve, reject) => {
        if (work === 'done') {
            resolve('게임 가능');
        } else {
            reject(new Error("게임 불가능"));
        }
    })
}

// [안좋은예] 콜백함수와 다를바 없다.
// - 에러 발생시 확인할 곳이 많아짐
myWork('done').then(function (value) { console.log(value) }, function (err) { console.error(err) });

// [좋은예]
myWork('doing')
    .then(function (value) { console.log(value) })
    .catch(function (err) { console.error(err) });