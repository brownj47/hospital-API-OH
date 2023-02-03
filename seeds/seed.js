require("dotenv").config();
const sequelize = require("../config/connection");
const { Physician, Patient, Record } = require("../models");

const seed = async ()=>{
    await sequelize.sync({force:true});
    const doctors = await Physician.bulkCreate([
        {
            "name":"Joe Rehfuss",
            "specialty":"Surgeon",
            "username":"joejoe",
            "password":"password"
        },
        {
            "name":"Dr. Acula",
            "specialty":"Blood",
            "username":"notavampire",
            "password":"batsbatsbats"
        },
        {
            "name":"Doc McStuffins",
            "specialty":"Plushies",
            "username":"yayforplushies",
            "password":"stuffing4eva"
        },
    ])
    const patients =  await Patient.bulkCreate([
        {
            "name":"Timmy Thomas",
            "age":6
        },
        {
            "name":"Tommy Thomas",
            "age":7
        },
        {   
            "name":"Tammy Thomas",
            "age":8
        },
    ])
    const records = await Record.bulkCreate([
        {
            "visitNotes": "Lil' Timmy was such a trooper! Great job Timmy!",
            "PatientId":1,
            "PhysicianId":1
        },   
        {
            "visitNotes": "Lil' Timmy blood was delicious.... I mean, clean",
            "PatientId":1,
            "PhysicianId":2
        },   
    ])

    await patients[0].addPhysicians([1,2])    
    await patients[1].addPhysician(3)
    await doctors[0].addPatient(2);    
    process.exit(1)
}

seed();