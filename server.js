const express = require('express');


const app = express();
app.listen(5000 , ()=>{
    console.log("the server is listed on no: 5000");
})

// making connection with the database 

// importting mongoose 
const mongoose = require('mongoose');
console.log(mongoose.version)

// making connection with the database with databse link 
// it take two parameter  
// 1- configration 

//mongoose.connect('mongodb://localhost:27017/myDatabase', {
// useNewUrlParser:true,
// useUnifiedTopology:true,                         /////////// // it is an promise 

// })


mongoose.connect('mongodb://127.0.0.1:27017/db', {
    

})

.then(()=>{
    console.log("connection succesfull")
})

.catch ((err)=>{
    console.log("recive an error " , err.message)
})

