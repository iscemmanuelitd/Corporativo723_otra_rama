/*
const { MongoClient} = require('mongodb');
const uri ="mongodb+srv://corporativo723:Durango723@cluster0.82r1d65.mongodb.net/"
const client = new MongoClient(uri)
*/

var axios = require('axios');
/*
const {Realm} = require("realm-web")
const app = new Realm.App ({ id: 'data-rsgsu' });
*/


const BD  = {
    /*
             conectar:async (_db)=>{await client.connect(); console.log("Base de Datos Conectada Exitosamente"); db=client.db(_db)},
            consultar:async (_col)=>{return await db.collection(_col).find().toArray()},
            insertar:async (_col,_dat)=>{await db.collection(_col).insertOne(_dat)},
            */
            autenticar:(_dat)=>{return auten(_dat)}
            }
            
function auten(_dat){
    var data = JSON.stringify({collection: "usuarios",database: "db723",dataSource: "Cluster0",filter:_dat,projection:{_id:0}});
    var config = {method: 'post',
        url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rsgsu/endpoint/data/v1/action/findOne',
        headers: {'Content-Type': 'application/json','Access-Control-Request-Headers': '*','api-key': 'AMO2GjAOfZYRiO1VDIzdVnejibVfO3bdvGjRUpqPTaCJTGjYHw4PGx8mZbqpb6xK',},
        data: data}
    return axios(config).then(function (response) {
            console.log(JSON.stringify(response.data.document));
            return [response.data.document]
        }).catch(function (error) {
            console.log(error);
        });

}


/*
  
async function loginEmailPassword(email, password) {
  const credentials = Realm.Credentials.emailPassword(email, password);
  const user = await app.logIn(credentials);
  console.assert(user.id === app.currentUser.id);
  return user;
}
  
*/




module.exports=BD
