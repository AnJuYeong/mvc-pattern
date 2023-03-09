// 데이터 베이스 정보 가져오기
const config = require("../config/config");

// 시퀄라이즈 라이브러리 가져오기
const Sequelize = require("sequelize");

// 시퀄라이즈 모델 
const Board = require("./board.model");

// db 빈 객체 생성해서 여러개 담을 거 만들어 놓기
const db = {};

const sequelize = new Sequelize(
    config.development.database, 
    config.development.username, 
    config.development.password, 
    config.development
    );

db.sequelize = sequelize;
db.Board = Board;

Board.init(sequelize);

module.exports = db;