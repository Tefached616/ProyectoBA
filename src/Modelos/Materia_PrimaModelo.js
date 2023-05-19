//#region METODO LISTAR
const { response } = require('express');
const { connection, makeQuery } = require('../conexion/index.js');

var Materia_PrimaModelo = {};

const getMateria_Primas = (req, res = response) =>
{
   
    var sql = "SELECT * FROM MATERIA_PRIMA";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(error));
   
}

//#endregion
//#region METODO INSERTAR
const insertMateria_Prima = (req, res = response) => {
    
        var Materia_PrimaData = {

        Materia_Prima: req.body.ID_MATERIA_PRIMA,
        TIPO_MP: req. body. TIPO_MP
        };

       var sql = " INSERT INTO materia_prima SET ?";

       makeQuery(sql, Materia_PrimaData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
       ;
    };
//#endregion
//#region METODO MODIFICAR
const updateMateriaprima = (req, res = response) =>{
    
        var Materia_PrimaData ={
            ID_MATERIA_PRIMA: req. body. ID_MATERIA_PRIMA,
            Materia_Prima: req.body.Materia_Prima,
            TIPO_MP: req.body.TIPO_MP
        };

         var sql = "UPDATE materia_prima SET NOM_MATERIA_PRIMA = "+  connection.escape(Materia_PrimaData.NOM_MATERIA_PRIMA)+
        ", CANTIDAD = "+Materia_PrimaData.Materia_Prima+
        ", TIPO_MP = "+  Materia_PrimaData.TIPO_MP+
        ", PRESENTACION_MP = "+ Materia_PrimaData.PRESENTACUIN_MP+
        " WHERE ID_MATERIA_PRIMA = " + Materia_PrimaData.ID_MATERIA_PRIMA+";";

        makeQuery(sql).then(() => res.json("registro actualizado con exito")).catch((err) => res.status(500).json(err));
            
        
    }

//#endregion
//#region METODO CONSULTA ID
const getMateria_Primasid = (req, res =response) =>
{
   
        var sql = "SELECT "+
        " MP. `ID_MATERIA_PRIMA`, "+
        " MP. `NOM_MATERIA_PRIMA`, "+
        " MP. `CANTIDAD`, "+
        " B. `CATALOGO` AS 'TIPO_MP',"+
        " C. `CATALOGO` AS 'PRESENTACION_MP' "+
        " FROM `materia_prima` AS MP "+
        " INNER JOIN `catalogo` AS B ON MP. `TIPO_MP` = B. `ID_CATALOGO`"+
        " INNER JOIN `catalogo` AS C ON MP. `PRESENTACION_MP` = C. `ID_CATALOGO`"+
        " WHERE `ID_MATERIA_PRIMA` = "+
            tipcat+
        "ORDER BY `ID_MATERIA_PRIMA`";

        makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
    };
    module.exports = {getMateria_Primas, insertMateria_Prima,getMateria_Primasid }
//#endregion
