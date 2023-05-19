//#region METODO LISTAR
const {Router} = require('express');
const router = Router();

const {getCatalogos,getCatalogosID,getCatalogosTC,insertCatalogo,updateCatalogo} = require('../Modelos/CatalogoModelo');
router.get("/",getCatalogos)

//#endregion
//#region METODO INSERTAR
router.post("/",insertCatalogo)

//#region METODO MODIFICAR
//#endregion
router.put("/", updateCatalogo);

//#region METODO CONSULTAR ID
//router.get("/:tipcat", getCatalogosTC);
router.get("/:tipcat", getCatalogosTC);
//#endregion
//#endregion
router.get("/:tipcat/:id", getCatalogosID);

//#endregion
module.exports=router;