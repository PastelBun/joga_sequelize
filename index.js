const express= require('express');
const app=express();
const con=require('./utils/db')

app.use(express.json());

app.use(express.urlencoded({ extended: true }));


con.connect(function(err){
    if(err) throw err;
    console.log("Connected to joga_sequelize db");
})

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize') // Example for sqlite

sequelize 
    .authenticate()
    .then(()=>{
    console.log('Connection has been established successfully.');
  }) 
  .catch (error =>{
    console.error('Unable to connect to the database:', error);
  });

const articleRouter=require('./routes/article');
app.use('/', articleRouter);

app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
});