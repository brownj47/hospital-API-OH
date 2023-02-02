const router = require('express').Router();

router.get("/", (req, res)=>{
    res.send("recordRoute")
})

module.exports = router;