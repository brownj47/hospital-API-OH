const Patient = require("./Patient")
const Record = require("./Record")

Patient.hasMany(Record, {
    foreignKey: "patientID",
    onDelete:"CASCADE"
})

module.exports = {Patient, Record}