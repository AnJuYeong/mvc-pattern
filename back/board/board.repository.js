class boardRepository {
    constructor({Board}){
        this.Board = Board;
    }

    async createBoard(title, contents){
        try{
            console.log("Repository임ㅋ")
            return await this.Board.create({title,contents});
        } catch(error){
            console.log(error);
        }
    }

    async viewBoard(){
        try{
            return await this.Board.findAll({
                order : [["createdAt","DESC"]]
            });
        } catch(error){
            console.log(error);
        }
    }

    async oneBoard(id){
        try{
            return await this.Board.findOne({
                where : { id : id }
            })
        }catch(error){
            console.log(error);
        }
    }

    async updateBoard(id, title, contents){
        try{
            return await this.Board.update({title : title, contents : contents}, {where : {id : id}});
        } catch(error){
            console.log(error);
        }
    }
    async deleteBoard(id){
        try{
            return await this.Board.destroy({where : {id : id}});
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = boardRepository;