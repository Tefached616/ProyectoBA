const {Router} = require('express');
const router = Router();

const {getMateria_Primasid} = require('../Modelos/Materia_PrimaModelo');

//Consultar Materia Prima por ID
router.get("/:id", getMateria_Primasid);

module.exports=router;