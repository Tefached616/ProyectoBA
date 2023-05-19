//#region METODO LISTAR
const express = require('express');
const router = express.Router();

const {getMateria_Primas, insertMateria_Prima} = require('../Modelos/Materia_PrimaModelo');
const { getCatalogosID } = require('../Modelos/CatalogoModelo');


//#endregion
//#region METODO INSERTAR
router.post("/", insertMateria_Prima)

//#endregion
//#region METODO MODIFICAR
router.put("/",);

//#endregion
//#region METODO CONSULTA ID
router.get("/:id", getCatalogosID);
module.exports=router;
//#endregion