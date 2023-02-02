const router = require("express").Router();
const patientRoutes = require("./patientController")
const recordRoutes = require("./recordController")
const physicianRoutes = require("./physicianController")

router.use("/patients", patientRoutes)
router.use("/records", recordRoutes)
router.use("/physicians", physicianRoutes)

module.exports = router;