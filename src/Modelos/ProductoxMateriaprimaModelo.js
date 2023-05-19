//#region METODO LISTAR
const {response} = require('express');
const {connection, makeQuery} = require('../conexion/index.js');

var ProductoxMateriaprimaModelo = {};


const getProductoxMateriaprimas = (req, res = response) =>{
   
    var sql ="SELECT  * FROM ID_PROD_X_MAT`, MP. `NOM_MATERIA_PRIMA`,    P. `NOM_PRODUCTO` FROM `productoxmateriaprima` AS F INNER JOIN `materia_prima` AS MP ON F. `ID_MATERIA_PRIMA` = MP. `ID_MATERIA_PRIMA`"+
    " INNER JOIN `producto` AS P ON F. `ID_PRODUCTO` = P. `ID_PRODUCTO` ORDER BY `ID_PROD_X_MAT`";


    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
}



//#endregion
//#region METODO INSERTAR
const insertProductoxMateriaprima = (req, res = response) => {

    var ProdXMPData = {
        ID_PROD_X_MAT: req.body.ID_PROD_X_MAT,
        DIRDATO_CONTACTO: req.body.DIRDATO_CONTACTO,
        TIPO_CONTACTO: req.body.TIPO_CONTACTO

    };


    var sql = " INSERT INTO contacto SET ?";

    makeQuery(sql, ProdXMPData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
};



//#endregion
//#region METODO MODIFICAR
const updateProductoxMateriaprima = (req, res = response) =>{
    if(ProductoxMateriaprimaData){
        var sql = "UPDATE productoxmateriaprima SET ID_MATERIA_PRIMA = "+
        ProductoxMateriaprimaData.escape(ProdXMPData.ID_MATERIA_PRIMA)
        +", ID_PRODUCTO = "+
        ProductoxMateriaprimaData.escape(ProdXMPData.ID_PRODUCTO)
        +" WHERE ID_PROD_X_MAT = "+
        ProductoxMateriaprimaData.escape(ProdXMPData.ID_PROD_X_MAT)+";";
        
        ProductoxMateriaprimaData.query(sql, function(error, result){
            if(error){
                throw error;
            }else{
                callback(null, {"msg:": "Registro Actualizado"});
            }
        });
    }
}
// //#endregion
// //#region METODO CONSULTA ID
const getProductoxMateriaprimasid = (req, res = response) =>
{
    const {id}=req.params
    var sql = `SELECT * FROM productoxmateriaprima where ID_PROD_X_MAT =${id} ;`

        
    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};

module.exports ={ getProductoxMateriaprimas, getProductoxMateriaprimasid, updateProductoxMateriaprima, insertProductoxMateriaprima}
//#endregion
