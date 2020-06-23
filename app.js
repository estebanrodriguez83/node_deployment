const express = require('express'); //Express Framework
const app = express(); //Saving Framework on Variable App
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');



//DB Config Connection String File
const db = require('./config/keys').MongoURI;

//CORS 
app.use(cors({origin: 'http://localhost:3000'})); 
//Hacer Cors Para Android 

require('dotenv').config({path: 'variables.env'});
//Connect to Mongo
mongoose.Promise= global.Promise;
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true
})


// BodyParser
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());

//Routes
app.use('/',require('./routes/api/methods'));

//Middleware
app.use(morgan('dev'));


//App Listening Selected Port
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000; //Selected Port Number 5000
app.listen(port,host, ()=> {
    console.log('El servidor esta funcionando')
});