class boardController{
    constructor(service){
        this.boardService = service;
    }

    async createBoard(req, res, next){
        try {
            const {title, contents} = req.body;
            if ((title === undefined && contents === undefined))
                throw new Error("공백 안됨");
            const response = await this.boardService.createBoard(title, contents);
            res.send(response)
          } catch (err) {
            res.send("공백 안됨");
            next(err);
          }
    }
    async viewBoard(req, res, next){
        try {
            const response = await this.boardService.viewBoard();
            res.send(response)
        } catch (err){
            next(err);
        }
    }
    async oneBoard(req, res, next){
        try {
            const id = req.params.id
            const response = await this.boardService.oneBoard(id);
            res.send(response);
        } catch (err){
            next(err);
        }
    }
    async updateBoard(req, res, next){
        try {
            console.log("크리스탈 controller")
            const id = req.params.id
            const {title, contents} = req.body;
            const response = await this.boardService.updateBoard(id,title,contents);
            res.send(response);
        } catch (err){
            next(err);
        }
    }
    async deleteBoard(req, res, next){
        try {
            const id = req.params.id
            const response = await this.boardService.deleteBoard(id);
            const resend = response.toString();
            res.send(resend);
        } catch (err){
            next(err);
        }
    }
    
}
module.exports = boardController;