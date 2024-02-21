const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require("cors");
const app = express();
const port = 4000
const orders = require('./routes/orders')
const register = require("./routes/register");
const login = require("./routes/login");
const stripe = require('stripe')

require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/Healthy").then(()=>{
    console.log("connected to the healthy db")
}).catch((err)=>{
    console.log(err)
})


app.use(express.urlencoded({extended:true}))
app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.use("/api/register", register);
app.use("/api/login", login);
app.use("/api/orders", orders);
app.use("/api/stripe" , stripe)


app.listen(port , ()=> console.log(`app listens on port : ${port}`))