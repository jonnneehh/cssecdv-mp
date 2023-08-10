import mysql, { createServer } from 'mysql2';
import createError from "http-errors"
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
}).promise()

export default async function getUserAuth(id){
    try{
        const [[userAuth]] = await connection.query(`
            SELECT * 
            FROM users 
            WHERE id = ?
        `, [id])
        
        if(!userAuth) throw createError[400]("User ID not found")
        
        return({
            userId: userAuth.id, 
            role: userAuth.role
        })
    }  
    catch(e){   
        console.error("DATABASE ERROR: " + e.sqlMessage) 
    }
    finally{  
        connection.end()
    }
}

 