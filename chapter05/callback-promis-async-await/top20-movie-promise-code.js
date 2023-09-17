const axios = require("axios");
const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

axios
  .get(url) // get 요청
  .then((result) => { // 결과값 처리
    if (result.status != 200) { // 상태가 200 아니면 에러
      throw new Error("요청에 실패했습니다!");
    }

    if (result.data) { // (3) result.data 있으면 결과 반환
      return result.data;
    }

    throw new Error("데이터 없습니다."); // data없으면 에러
  })
  .then((data) => { // (3) 에서 받은 데이터 처리
    if (!data.articleList || data.articleList.size == 0) { // 크기가 0이면 에러
      throw new Error("데이터가 없습니다.");
    }
    return data.articleList; // 영화 리스트 반환
  })
  .then((articles) => {
    return articles.map((article, idx) => { // 영화 리스트를 제목과 순위정보로 분리
      return { title: article.title, rank: idx + 1 };
    });
  })
  .then((results) => {
    for (let movieInfo of results) { // 영화 리스트 출력
      console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
    }
  })
  .catch((err) => { // 중간중간 에러 처리
    console.log("<<에러발생>>");
    console.log(err);
  });
