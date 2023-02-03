const router = require("express").Router();
const { Patient, Record } = require("../models");

router.get("/", (req,res)=>{
    Patient.findAll({
        include:[Record]
    }) .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => console.log(err));
})

router.post("/", (req, res) => {
    Patient.create(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
});

router.post("/addPhysician",(req,res)=>{
    Patient.findByPk(req.body.PatientId).then(foundPatient=>{
        if(!foundPatient){
            res.status(404).json({msg:"no such doctor"});
        } else {
            // console.log(foundPatient)
            foundPatient.addPhysician(req.body.PhysicianId).then(data=>{
                res.json(data);
            }).catch(err=>{
                console.log(err);
            })
        }
    })
})
router.delete("/removePhysician/:patId/:physId",(req,res)=>{
    Patient.findByPk(req.params.patId).then(foundPatient=>{
        if(!foundPatient){
            res.status(404).json({msg:"no such doctor"});
        } else {
            // console.log(foundPatient)
            foundPatient.removePhysician(req.params.physId).then(data=>{
                res.json(data);
            }).catch(err=>{
                console.log(err);
            })
        }
    })
})

module.exports = router;
