const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize') // Example for sqlite
const models=require('../models')

const getAllArticles=(req, res)=>{
    models.Article.findAll()
    .then(articles =>{
        return res.status(200).json({ articles });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
};
const getArticleBySlug=(req, res)=>{
    models.Article.findOne({
        where: {
            slug:req.params.slug
        },
        include: [{
            model: models.Authors
        }],
    })
    .then(article=>{
        return res.status(200).json({ article })
    })
    .catch(error=>{
        return res.status(500).json(error.message);
    })
};

module.exports={
    getAllArticles,
    getArticleBySlug
};