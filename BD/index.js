
var axios = require('axios');
var keys ={Clientes:"yaZ7yurfooFavJK3gZilwww6SxwZRAAm92gPJAQ8xALK78jIb15zKt6nrpUQWL82",
           Usuarios:'AMO2GjAOfZYRiO1VDIzdVnejibVfO3bdvGjRUpqPTaCJTGjYHw4PGx8mZbqpb6xK'}
const serviciosWeb = {
      autenticar:(_d)=>{return axios(conf(_d[0],_d[1], _d[2],_d[3],_d[4])).then(r=>{console.log(r);      return {estatus:true,datos:r.data.document}}).catch(e=>{return {estatus:false,mensaje:"No se pudo autenticar al ususario por alguna razón"}})},


      buscar:(_dat)=>{  },
      insertar:(_dat) => {  },
      modificar:(_dat) => {  },
      ubicar:(_dat) => { }
       }   


let datosApi = function(_db,_co,_fil,_pr={_id:0}){
      return JSON.stringify({collection: _co, database: _db, dataSource: "Cluster0",filter:_fil,projection:_pr})
}

let conf = (_mh,_url,db,co,fil)=>{
    return { method: _mh, 
             url: `https://us-east-2.aws.data.mongodb-api.com/app/data-rsgsu/endpoint/data/v1/action/${_url}`,
             headers: {'Content-Type':'application/json',
                     'Access-Control-Request-Headers': '*',
                     'api-key': keys.Usuarios},
            data: datosApi(db,co,fil)
           }
}




module.exports=serviciosWeb 
