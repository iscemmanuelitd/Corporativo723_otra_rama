var express = require('express');
var router = express.Router();
const web =  require('../BD')



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
  let datos = await web.consultar("usuarios")
  res.json(datos)
})

router.post('/autenticar',async function(req,res,next){
   let _d = ["post","findOne","db723","usuarios",req.body]
    let usu = await web.autenticar(_d)
    console.log(usu)
    if (usu.estatus)
      res.send({estatus:true,mensaje:`${usu.datos.nombre} ${usu.datos.paterno} ${usu.datos.materno}`,datos:usu.datos})
    else
      res.send({estatus:false,mensaje:"El usuario o la contraseña son incorrectos"})

})

module.exports = router;
