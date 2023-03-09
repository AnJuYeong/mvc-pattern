class boardService{
    constructor(repository){
        this.boardRepository = repository;
    }
    
    async createBoard(title, contents){
        try {
            return await this.boardRepository.createBoard(title, contents)
        } catch (error) {
            console.log(error)
        }
    }
    async viewBoard(){
        try {
            return await this.boardRepository.viewBoard()
        } catch (error) {
            console.log(error)
        }
    }
    async oneBoard(id){
        try{
            return await this.boardRepository.oneBoard(id)
        }catch(error){
            console.log(error);
        }
    }
    async updateBoard(id, title, contents){
        try{
            return await this.boardRepository.updateBoard(id,title,contents)
        }catch(error){
            console.log(error);
        }
    }
    async deleteBoard(id){
        try{
            return await this.boardRepository.deleteBoard(id)
        }catch(error){
            console.log(error);
        }
    }
}
module.exports = boardService;