const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize') // Example for sqlite

const { Article }= require('../models');

const getAllArticles=(req, res)=>{
    const articles=Article.findAll()
    res.json(articles)
}

module.exports={
    getAllArticles
};