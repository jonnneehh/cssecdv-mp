import mysql, { createServer } from 'mysql2';
import dotenv from 'dotenv'

dotenv.config()

const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }).promise()

export default async function initalize_db(){
    try{
        const db_name = process.env.DB_NAME 
        const [result_connection] = await connection.query(`CREATE DATABASE ${db_name}`)

        const [use_cssecdv_db] = await connection.query(`USE ${db_name}`)
        
        const [createUsersTable] = await connection.query(`
            CREATE TABLE users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(45) UNIQUE,
                firstName VARCHAR(45),
                lastName VARCHAR(45),
                email VARCHAR(45),
                mobileNum VARCHAR(12),
                password VARCHAR(60),
                profilePhoto VARCHAR(60),
                dateCreated DATETIME, 
                role VARCHAR(45),
                lastLoggedIn DATETIME
            ); 
        `)
        if(result_connection && use_cssecdv_db && createUsersTable) console.log(`Initalized New Database: ${db_name}`)
    } 
    catch(e){ 
        console.error(e.sqlMessage) 
    }
    finally{
        connection.end()
    }
}
