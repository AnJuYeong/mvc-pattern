// 사용할 모듈 express, sequelize,  nodemon, mysql2

// 디자인 패턴중
// 웹의 가장 기본의 디자인 패턴 
// MVC 패턴

// sequelize의 장점
// (모델 뷰파일 컨트롤러)
// 가독성이 좋고 재사용 및 유지보수도 좋아서 많이 사용한다.

// sequelize는 ORM 라이브러리
// sequelize를 사용을 하면 자바스크립트 코드만으로 SQL을 제어 할 수 있다.
// 객체와 데이터베이스를 ORM 라이브러리가 매핑을 시켜주기 때문에 
// 자바스크립트 구문을 SQL로 바꿔준다.
// 쉽게 SQL 작업을 쉽게 할 수 있도록 도와주는 라이브러리

// 라우터 -> 컨트롤러 -> 서비스 -> 레포 -> 모델

const express = require("express");
const cors = require("cors");

const app = express();
const router = require("./routes");
const {sequelize} = require("./models")

// 앞단이랑 연결 시켜줄거
const options = {
    origin : "http://localhost:3000"
};

app.use(express.json());
app.use(cors(options));
app.use(router);


app.listen("8000", async () => {
    await sequelize.sync({ force: false })
    console.log("서버 열림 ㅎㅎ")
})

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Something broke!');
});