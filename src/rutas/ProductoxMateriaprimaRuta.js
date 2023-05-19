//#region METODO LISTAR
const express = require('express');
const router = express.Router ();

const { getProductoxMateriaprimas, getProductoxMateriaprimasid, updateProductoxMateriaprima, insertProductoxMateriaprima} = require('../Modelos/ProductoxMateriaprimaModelo');
router.get("/",getProductoxMateriaprimas)

//#endregion
//#region METODO INSERTAR
router.post("/", insertProductoxMateriaprima)

//#endregion
//#region METODO MODIFICAR
router.put("/", updateProductoxMateriaprima)

//#endregion
//#region METODO CONSULTA ID
router.get("/:id", getProductoxMateriaprimasid)
module.exports =router;
//#endregion
