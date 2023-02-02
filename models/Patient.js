const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Patient extends Model {}

Patient.init(
    {
        name: {
            type:DataTypes.STRING
        },
        age: {
            type:DataTypes.INTEGER
        },

    },
    {
        sequelize,
        modelName: "patient",
    }
);

module.exports = Patient;
