const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize') // Example for sqlite
const models=require('../../models')

const createArticle=( req, res )=>{
let name=req.body.name
let slug=req.body.slug
let image=req.body.image
let body=req.body.body

const newArticle=models.Article.create({
    name:name,
    slug:slug,
    image:image,
    body:body,
    published: new Date().toISOString().slice(0, 19).replace('T', ' ')
})
.then(article=>{
    console.log(article)
    return res.status(200).json({ message: "New article is added"});
})
.catch (error=>{
    return res.status(500).send(error.message);
})
}
const updateArticle=( req, res )=>{
    const id=parseInt(req.params.id)
    let name=req.body.name
    let slug=req.body.slug
    let image=req.body.image
    let body=req.body.body
    
    const newArticle=models.Article.update({
        name:name,
        slug:slug,
        image:image,
        body:body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
        where: { id:id },
    })
    .then(article=>{
        console.log(article)
        return res.status(200).json({ message: "Article updated"});
    })
    .catch (error=>{
        return res.status(500).send(error.message);
    })
}
const deleteArticle=( req, res )=>{
        
        const id= parseInt(req.params.id)
        const deletedArticle=models.Article.delete(
            {
                where: {id:id}
            }
        )
        .then(deletedCount=>{
            if (deletedCount>0){
            return res.status(200).json({ message: "Article deleted"});
        }})
        .catch (error=>{
            return res.status(500).send(error.message);
        })
}
module.exports={
    createArticle,
    updateArticle,
    deleteArticle
};