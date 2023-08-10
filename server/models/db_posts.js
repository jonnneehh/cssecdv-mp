import mysql from 'mysql2';
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
}).promise()


const db = {
    getPosts: async function(){
        try{
            const [posts] = await pool.query(`
            SELECT * FROM posts
            `)  

            return posts
        }
        catch(e){
            console.error(e)
        }
    },

    insertPost: async function(data){

    },

    removePost: async function(data){

    },

    updatePost: async function(data){
        try{
            if (!data) throw createError[500]("DATABASE: No data passed")

            //UPDATE DATA 
            for(let post of data){
                pool.query(`
                UPDATE posts
                SET name = ?,
                    description = ?,
                    category = ?,
                    cost = ?,
                    quantity = ?,
                    comment = ?,
                    lastDateEdited = CURRENT_TIMESTAMP
                WHERE id = ?;
                `, [post.name, post.description, post.category, post.cost, post.quantity, post.comment, post.id,])
            }
        }catch(e){
            console.error(e)
        }
    },
}

export default db; 
