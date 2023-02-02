const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Record extends Model {}

Record.init(
    {
        patientID: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        modelName: "record",
    }
);

module.exports = Record;
