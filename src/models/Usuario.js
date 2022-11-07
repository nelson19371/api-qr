const {DataTypes} = require("sequelize");
const db =require("../db/database");

const Usuario = db.define("Usuarios",{

rut: {
    type: DataTypes.STRING,
},

ubicacion:{
    type: DataTypes.STRING,
    unique: true,
},
fecha:{
    type: DataTypes.STRING,
}

});

module.exports = Usuario;