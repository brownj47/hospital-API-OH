const router = require("express").Router();
const { Physician, Patient, Record } = require("../models");

router.get("/", (req,res)=>{
    Physician.findAll({
        include:[{
            model:Patient,
        }]
    }) .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => console.log(err));
})
router.get("/:id", (req,res)=>{
    Physician.findByPk(req.params.id,{
        include:[{
            model:Patient,
            include:{
                model:Record
            }
        }]
    }) .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => console.log(err));
})

router.post("/", (req, res) => {
    Physician.create(req.body)
        .then((data) => {
         
            return res.status(200).json(data);
         
        })
        .catch((err) => console.log(err));
});

router.post("/addPatient",(req,res)=>{
    Physician.findByPk(req.body.PhysicianId).then(foundDoctor=>{
        if(!foundDoctor){
            res.status(404).json({msg:"no such doctor"});
        } else {
            // console.log(foundDoctor)
            foundDoctor.addPatient(req.body.PatientId).then(data=>{
                res.json(data);
            }).catch(err=>{
                console.log(err);
            })
        }
    })
})

module.exports = router;
