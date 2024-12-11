const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize') // Example for sqlite
const models = require('../models');

// Function to get articles by author ID
const getArticlesById = (req, res) => {
    console.log('controllers')
    // Find the author by primary key (id)
    models.Authors.findByPk(req.params.id)  // Using findByPk instead of findById
        .then((author) => {
            if (!author) {
                return res.status(404).json({ message: "Author not found" });
            }

            // Find all articles related to the author
            return models.Article.findAll({
                where: {
                    author_id: req.params.id  // Match articles to author by author_id
                },
            });
        })
        .then((articles) => {
            // If no articles are found
            if (!articles || articles.length === 0) {
                return res.status(404).json({ message: "No articles found for this author" });
            }

            console.log(articles);
            return res.status(200).json({ articles });
        })
        .catch((error) => {
            console.error(error);
            return res.status(500).json({ message: "Error retrieving articles", error: error.message });
        });
};

module.exports = {
    getArticlesById
};