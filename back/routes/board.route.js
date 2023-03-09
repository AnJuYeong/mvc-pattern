const express = require("express");
const router = express.Router();

const { controller } = require("../board/board.module");

// RESTful API
// GET
// 클라이언트는 GET을 사용하여 서버의 지정된 URL에 있는 리소스에 액세스합니다. 
// GET 요청을 캐싱하고 RESTful API 요청에 파라미터를 넣어 전송하여 전송 전에 데이터를 필터링하도록 서버에 지시할 수 있습니다.

// POST
// 클라이언트는 POST를 사용하여 서버에 데이터를 전송합니다. 
// 여기에는 요청과 함께 데이터 표현이 포함됩니다. 동일한 POST 요청을 여러 번 전송하면 동일한 리소스를 여러 번 생성하는 부작용이 있습니다.

// PUT
// 클라이언트는 PUT을 사용하여 서버의 기존 리소스를 업데이트합니다. 
// POST와 달리, RESTful 웹 서비스에서 동일한 PUT 요청을 여러 번 전송해도 결과는 동일합니다.

// DELETE
// 클라이언트는 DELETE 요청을 사용하여 리소스를 제거합니다. 
// DELETE 요청은 서버 상태를 변경할 수 있습니다. 하지만 사용자에게 적절한 인증이 없으면 요청은 실패합니다.

// localhost:8000/board/create 경로가 이렇게 된다.
router.post("/create",(req, res, next) => controller.createBoard(req, res, next));
router.get("/view",(req,res,next) => controller.viewBoard(req,res, next));
router.get("/:id",(req,res,next) => controller.oneBoard(req,res, next));
router.put("/:id",(req,res,next) => controller.updateBoard(req,res, next));
router.delete("/:id",(req,res,next) => controller.deleteBoard(req,res, next));

module.exports = router;