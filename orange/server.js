// https://www.jianshu.com/p/25ee3f17c0a4
const express = require("express");
const { serverIndex } = require("./app"); // Importing the exported app from app.js

const app = express();

app.use(serverIndex); // Using the imported serverIndex


const path = require('path');

app.use(express.static(__dirname + '/static'))
app.get('/',(req,res)=>{res.send('hi, orange')});
app.get('/*', function (req, res){
    res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
})

app.listen("3001", ()=>{console.log('running at 3001')});