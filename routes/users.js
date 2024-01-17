var express = require('express');
var router = express.Router();
const mongo =  require('../BD')



/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render("mapGoogle",{algo:"nada"})
  //res.send('<a href="intent://com.google.android.gms/#Intent;scheme=promote_smartlock_scheme;end" style="outline: none;"><img loading="lazy" decoding="async" class="wp-image-36041" src="/frpapk/img/ios-lock-icon-12-150x150.png" alt="" width="75" height="75">IR A LOCK</a>');
});

router.get('/nuevo/:id/:pass', async function(req, res, next) {
  insertar(req.params,res)
});

router.post('/nuevo', async function(req, res, next) {
  insertar(req.body,res)
});
   
router.get('/consultar',async function(req,res,next){
  let datos = await mongo.consultar("usuarios")
  res.json(datos)
})

router.post('/autenticar',async function(req,res,next){
    console.log(req.body)
    let usu = await mongo.autenticar(req.body)
    if (usu.length > 0)
      res.send({estatus:true,mensaje:`${usu[0].nombre} ${usu[0].paterno} ${usu[0].materno}`,datos:usu[0]})
    else
      res.send({estatus:false,mensaje:"El usuario o la contraseña son incorrectos"})

})

module.exports = router;
