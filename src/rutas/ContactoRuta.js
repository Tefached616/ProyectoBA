//#region METODO LISTAR
const express = require('express');
const router = express.Router();

const {getContactos, getContactosid, updateContacto, insertContacto} = require('../Modelos/ContactoModelo');
router.get("/", getContactos)

router.get("/",getContactos)

//#endregion
//#region METODO INSERTAR 
router.post("/", insertContacto)

//#region METODO MODIFICAR
router.put("/",updateContacto);
//#endregion
//#region METODO CONSULTA ID
router.get("/:tipcat", getContactos)
module.exports=router;
//#endregion