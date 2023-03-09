const models = require("../models");
const boardController = require("./board.controller");
const boardRepository = require("./board.repository");
const boardService = require("./board.service");


const repository = new boardRepository(models);
const service = new boardService(repository);
const controller = new boardController(service);

module.exports = {
    repository,
    service,
    controller,
    models
}