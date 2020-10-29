const express = require('express');
const app = express();
const mongoose = require('mongoose')
const routeUser = require('./routers/users');
const cors = require("cors");
require('dotenv').config();

app.use( express.urlencoded({ extended: true }) );
app.use(express.json());

// Middleware
app.use(cors());
app.use( '/api/user', routeUser );



app.get( '/', (req,res) =>{
    res.send('Hello!!');
} );

// app.get('/api/courses', (req,res)=>{
//     res.send([1,2,3])
// })

mongoose.connect( process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    ()=>{
    console.log("connected to database!!!")
} );
// const POST = process.env.POST || 3000;
// app.listen( POST, () => console.log(`Listening on port ${POST}`) );
app.listen(process.env.PORT||5000);