const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class Record extends Model{}

Record.init({
    visitNotes:{
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize
}
)

module.exports = Record;