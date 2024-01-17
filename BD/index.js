
var axios = require('axios');

const serviciosWeb = {
      autenticar:(_d)=>{return axios(auten(conf(_d[0],_d[1], _d[2],_d[3],_d[4]).then(r=>{return r.data.document}).catch(e=>{return e})},


      buscar:(_dat)=>{  },
      insertar:(_dat) => {  },
      modificar:(_dat) => {  },
      ubicar:(_dat) => { }
       }   


let datosApi = function(_db,_co,_fil,_pr={_id:0}){
      return JSON.stringify({collection: _co, database: _db, dataSource: "Cluster0",filter:_fil,projection:_pr})
}

let conf = (_mh,_url,db,con,fil)=>{
    return {method: _mh, 
            url: `https://us-east-2.aws.data.mongodb-api.com/app/data-rsgsu/endpoint/data/v1/action/${_url}`,
           headers: {'Content-Type':'application/json',
'Access-Control-Request-Headers': '*',
'api-key': 'AMO2GjAOfZYRiO1VDIzdVnejibVfO3bdvGjRUpqPTaCJTGjYHw4PGx8mZbqpb6xK'},
        data: datosApi(db,co,fil)     }
}




module.exports=serviciosWeb 
