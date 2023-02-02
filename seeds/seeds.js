const sequelize = require('../config/connection');
const { Patient, Record } = require('../models');

const patientSeedData = require('./patientSeedData.json');
const recordSeedData = require('./recordSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const patients = await Patient.bulkCreate(patientSeedData);
  const records = await Record.bulkCreate(recordSeedData);

  console.log(patients)
  console.log(records)
  process.exit(0);
};

seedDatabase();