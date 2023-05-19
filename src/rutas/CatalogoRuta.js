//#region METODO LISTAR
const {Router} = require('express');
const router = Router();

const {getCatalogos,getCatalogosID,getCatalogosTC,insertCatalogo,updateCatalogo} = require('../Modelos/CatalogoModelo');

//Consultar los catalogos a nivel general
router.get("/",getCatalogos)

//insertar catalogos en la tabla
router.post("/",insertCatalogo)

router.get("/:tipcat", getCatalogosTC);

//Actualizar catalogos en la tabla
router.put("/", updateCatalogo);

//Consultar Catalogos por ID
router.get("/:tipcat/:id", getCatalogosID);
//
router.get("/:tipcat", getCatalogosTC);

module.exports=router;