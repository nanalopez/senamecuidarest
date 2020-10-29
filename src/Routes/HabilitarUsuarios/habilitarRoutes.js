const express = require('express');
const router = express.Router();

const HabilitarController = require('../../Controllers/HabilitarUsuarios/habilitar')
const {checkRole} = require('../../Utils/Auth');

router.route("/listarsuspendidos").get(checkRole, HabilitarController.Listar_Suspendidos);
router.route("/habilitarUsuario/:id").post(HabilitarController.Habilitar_Usuarios);

module.exports = router;
