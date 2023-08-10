import db_posts from "../models/db_posts.js"

const controller = {
    getPosts: async function(req, res){
        const db_products = await db_posts.getPosts()
        res.send(db_products)
    },

    addPost: async function(data){
        
    },

    updatePost: async function(req, res){
        db_posts.updatePost(req.body)
    }
}

export default controller