const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Record extends Model {}

Record.init(
    {
        visitNotes: {
            type:DataTypes.TEXT
        },
        patientID: {
            type:DataTypes.INTEGER,
            references:{
                model:"patients",
                key:"id"
            }
        },

    },
    {
        sequelize,
        modelName: "record",
    }
);

module.exports = Record;
