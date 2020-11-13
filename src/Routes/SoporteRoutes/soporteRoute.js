const express = require('express');
const router = express.Router();

// --------- Import the controllers ----------
const soporte_controller = require('../../Controllers/SoporteController/soporteController');


router.route("/create").post(soporte_controller.soporte_create);

module.exports = router;
