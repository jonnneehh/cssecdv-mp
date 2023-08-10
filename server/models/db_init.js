import mysql, { createServer } from 'mysql2';
import dotenv from 'dotenv'
import bcryptEncrypt from '../auth/bcryptEncrypt.js';

dotenv.config()

const connection = mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
    }).promise()

export default async function initalize_db(){
    try{
        const db_name = process.env.DB_NAME 
        const [result_connection] = await connection.query(`CREATE DATABASE IF NOT EXISTS ${db_name}`)

        await connection.query(`USE ${db_name}`)
        
        const [createUsersTable] = await connection.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(45) UNIQUE,
                firstName VARCHAR(45),
                lastName VARCHAR(45),
                email VARCHAR(45),
                mobileNum VARCHAR(12),
                password VARCHAR(60),
                profilePhoto VARCHAR(60),
                dateCreated DATETIME DEFAULT CURRENT_TIMESTAMP,
                role VARCHAR(45) DEFAULT 'regular', 
                lastLoggedIn DATETIME DEFAULT CURRENT_TIMESTAMP
            ); 
        `)
 
        const [createPostsTable] = await connection.query(`
            CREATE TABLE IF NOT EXISTS posts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(30),
                description VARCHAR(60),
                category VARCHAR(30),
                cost FLOAT,
                quantity INT DEFAULT 0,
                comment VARCHAR(100),
                dateAdded DATETIME DEFAULT CURRENT_TIMESTAMP,
                lastDateEdited DATETIME DEFAULT CURRENT_TIMESTAMP
            );
        `) 
        
        if(result_connection.warningStatus == 0 && 
           createUsersTable.warningStatus == 0 &&
           createPostsTable.warningStatus == 0){
            console.log(`Initalized New Database: ${db_name}`)
           }
        
        await insertAdmin()
    }  
    catch(e){   
        console.error("DATABASE ERROR: " + e.sqlMessage) 
    }
    finally{  
        connection.end()
    }
}

async function insertAdmin() {
    try{
        //Double check if JSON has data
        const password = await bcryptEncrypt("admin")

        const [result] = await connection.query(`
        INSERT INTO users (username, firstName, lastName, email, mobileNum, password, role, profilePhoto)
        VALUES ('admin', 'Admin', 'User', 'admin@admin.com', '09123456789', ?, 'admin', 'temporary.png')
        `, [password])

        if(result.affectedRows > 0) console.log("DATABASE: Successfully added admin user with ID: " + result.insertId)
        else console.log("DATABASE: Error adding new user: admin") 
    }
    catch(e){
        
    }    
}
 