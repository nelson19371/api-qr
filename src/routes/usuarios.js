const router = require('express').Router();
const Usuario = require("../models/Usuario");

router.get('/', async(req,res)=>{
    const usuarios = await Usuario.findAll()

    res.json(usuarios);

})


router.get('/:id', (req,res)=>{
    

    const {id} = req.params;
    // id =now
    res.json({
        id,
        rut: "1988888"
    });

});

// crear un usuario

router.post('/', async (req,res)=>{
    let today = new Date();
 
    // obtener la fecha y la hora
    let now = today.toLocaleString();
    const {rut,ubicacion,fecha=now} = req.body;
    


    if(!rut || !ubicacion){

        return res.status(400).json({
            error: "uno o mas campos vacios"
        });


    }

   


    const usuario = await Usuario.create({rut, ubicacion,fecha});
    res.json(usuario);

});



module.exports = router;