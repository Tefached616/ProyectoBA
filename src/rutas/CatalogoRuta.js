//#region METODO LISTAR
const {Router} = require('express');
const router = Router();

const {getCatalogos,getCatalogosID,getCatalogosTC,insertCatalogo,updateCatalogo} = require('../Modelos/CatalogoModelo');
router.get("/",getCatalogos)

//#endregion
//#region METODO INSERTAR
router.post("/",insertCatalogo)
//#endregion
//#region METODO MODIFICAR
//#endregion
//#region METODO CONSULTAR ID
router.get("/:tipcat", getCatalogosTC);
//#endregion

router.put("/", updateCatalogo);

router.get("/:tipcat/:id", getCatalogosID);
module.exports=router;