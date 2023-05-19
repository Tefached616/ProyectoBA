//#region METODO LISTAR
const {response} = require('express');
const {connection, makeQuery} = require('../conexion/index.js');

var ContactoModelo = {};

const getContactos = (req, res = response)=>
{
  
    var sql = "SELECT * FROM CONTACTO";

    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(error));
}

//#endregion
//#region METODO INSERTAR
const insertContacto = (req, res = response) => {
    
        var ContactoData = {
            CONTACTO: req.body.CONTACTO,
            TIPO_CONTACTO: req.body.TIPO_CONTACTO
            };

            var sql =" INSERT INTO contacto SET ?";

            makeQuery(sql, ContactoData).then(() => res.json("registro insertado con exito")).catch((err) => res.status(500).json(err));
    
    };
//#endregion
//#region METODO MODIFICAR
const updateContacto = (req, res = response) =>{
    var ContactoData = {
        ID_CONTACTO: req.body.ID_CONTACTO,
        CATALOGO: req.body.CATALOGO,
        TIPO_CONTACTO: req.body.ID_CONTACTO
    };
        var sql = "UPDATE contacto SET ID_PERSONAL = "+
        ContactoData.ID_CONTACTO+
        +", DIRDATO_CONTACTO = "+
        ContactoData.TIPO_CONTACTO +
        +", TIPO_CONTACTO = "+
        ContactoData.ID_CONTACTO +
        +" WHERE ID_CONTACTO = "+
        ContactoData.ID_CONTACTO+";";
        
        makeQuery(sql).then(() => res.json("registro actualizado con exito")).catch((err) => res.status(500).json(err));
    }

//#endregion
//#region METODO CONSULTA ID
const getContactosid = (req, res = response) =>
{
    
        var sql = "SELECT C.`ID_CONTACTO`, CONCAT(P.`PNOM_PERSONAL`,' ', P.`SNOM_PERSONAL`,' ', P.`PAPELL_PERSONAL`,' ', P.`SAPELL_PERSONAL`) AS 'NOMBRE PERSONAL', C.`DIRDATO_CONTACTO`, CA. `CATALOGO` AS 'TIPO_CONTACTO' FROM `contacto` AS C INNER JOIN `personal` AS P ON C.`ID_PERSONAL` = P. `ID_PERSONAL` INNER JOIN `catalogo` AS CA ON C. `TIPO_CONTACTO`= CA. `ID_CATALOGO` WHERE `ID_CONTACTO` = " + connection.escape(id)+"ORDER BY `ID_CONTACTO`"+
         ";";

    
    makeQuery(sql).then((result) => res.json(result)).catch((err) => res.status(500).json(err));
};
//#endregion
module.exports= { getContactos,insertContacto, getContactosid, updateContacto }