const Physician = require("./Physician");
const Patient = require("./Patient");
const Record = require("./Record");

Physician.hasMany(Record);
Record.belongsTo(Physician);

Patient.hasMany(Record);
Record.belongsTo(Patient);

Physician.belongsToMany(Patient,{
    through:"PhysicianPatient"
})
Patient.belongsToMany(Physician,{
    through:"PhysicianPatient"
})


module.exports = { Physician, Patient, Record };
