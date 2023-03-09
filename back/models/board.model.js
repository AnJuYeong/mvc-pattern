const Sequelize = require("sequelize");

class Board extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            title : {
                type : Sequelize.STRING(20),
                allowNull : null
            },
            contents : {
                type : Sequelize.STRING(100),
                allowNull : null,
            },
        },
        {
            sequelize,
            timestamps : true,
            modelName : "Board",
            tableName : "boards",
            underscored : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = Board;