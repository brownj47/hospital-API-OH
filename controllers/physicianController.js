const router = require("express").Router();
const { Physician } = require("../models");

router.get("/", (req,res)=>{
    Physician.findAll() .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => console.log(err));
})

router.post("/", (req, res) => {
    Physician.create(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
