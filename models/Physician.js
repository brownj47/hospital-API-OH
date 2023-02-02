const {Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection")

class Physician extends Model{}

Physician.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    specialty:{
        type: DataTypes.STRING,
        allowNull: false
    },
    username:{
        type: DataTypes.STRING,
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize
}
)

module.exports = Physician;