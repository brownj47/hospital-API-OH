const router = require("express").Router();

const patientRoutes = require("./patientRoutes")
const recordRoutes = require("./recordRoutes")

router.use("/patients",patientRoutes);
router.use("/records",recordRoutes);

module.exports = router;
