const router = require("express").Router();
const { Patient } = require("../models");

router.get("/", (req,res)=>{
    Patient.findAll() .then((data) => {
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

module.exports = router;
