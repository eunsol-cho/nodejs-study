// 1) async 예제
async function myName() {
  return "Andy";
}

//console.log(myName());

// 2) await 예제 - 1 
async function showName() {
  const name = await myName();
  console.log(name);
}

//console.log(showName());

// 3) await 예제 - 2

function waitOneSecond(msg) {
  return new Promise((resolve, _) => {
    setTimeout(() => resolve(`${msg}`), 1000);
  });
}

async function countOneToTen() {
  for (let x of [...Array(10).keys()]) {
    let result = await waitOneSecond(`${x + 1}초 대기중...`);
    console.log(result);
  }
  console.log("완료");
}

countOneToTen();
