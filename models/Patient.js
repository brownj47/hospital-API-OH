const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class Patient extends Model{}

Patient.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    age:{
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    sequelize
}
)

module.exports = Patient;