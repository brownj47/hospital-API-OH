const router = require('express').Router();

const {Patient} = require("../models")

router.get("/", (req, res)=>{
    
    res.send("patientRoute")
})
router.post("/", (req, res)=>{

    res.send("patientRoute")
})

module.exports = router

