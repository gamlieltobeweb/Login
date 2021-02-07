var express = require('express')
var app =express()
var router = express.Router()

const session = require('express-session');
var bodyParser = require('body-parser')
const { routerlication } = require('express')
const { json } = require('body-parser')
var cors = require('cors')

const port = 4545


const db = require('./connectionDB')


var corsOptions = {
    origin: 'http://localhost:19006',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  } 


app.use(function (req, res, next) {
  const allowedOrigins = ['http://localhost:19006'];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    console.log('set access control header');
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Max-Age', '*');
  res.header("Access-Control-Allow-Credentials", "true");
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();

});

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.use(session({
  secret: 'challenges',
  resave: false,
  saveUninitialized: false
}));
 



router.use(bodyParser.json({type:'routerlication/json'}))
router.use(bodyParser.urlencoded({extended:true}))


app.use(express.static(__dirname + '/public'));



// var serveur = app.listen(4545,()=>{

//     var host = serveur.address().address
//     var port = serveur.address().port
//     console.log("bien connecter");
// })


app.get('/aaa', (req, res) => {
    res.send('Hello World!')
  })



app.get("/user",cors(corsOptions), function(req,res){
// res.json({msg:"COrsCOrs"})
// res.send("coucou")
    db.query('select * from client',function(error,rows,field){
        if (error)console.log("err",error);
        else{
            console.log("rows")
            res.send({rows})
        }

    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })