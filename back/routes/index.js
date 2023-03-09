const express = require("express");
const router = express.Router();
const boardRoute = require("./board.route");

// localhost:8000/board 이렇게 만들고 boardRoute 추가 시켜줌
router.use("/board", boardRoute);

module.exports = router;