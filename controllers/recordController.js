const router = require("express").Router();
const { Record } = require("../models");

router.get("/", (req,res)=>{
    Record.findAll() .then((data) => {
        res.status(200).json(data);
    })
    .catch((err) => console.log(err));
})

router.post("/", (req, res) => {
    Record.create(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => console.log(err));
});

module.exports = router;
