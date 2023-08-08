import mysql from 'mysql2';
import createError from 'http-errors';
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD
    }).promise()

const db = {

    /**
     * TODO: Do bcrypt password here instad of auth-controller.js
     */
    insertUser: async function(data) {
        try{
            //Double check if JSON has data
            if (!data) throw createError[500]("JSON does not contain username")
            const bcryptpassword = await do_encrypt(data.password)
            
            const [result] = await pool.query(`
            INSERT INTO users (username, firstName, lastName, email, mobileNum, password, profilePhoto) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`, [data.username, data.firstName, data.lastName, data.email, data.mobileNum, bcryptpassword, data.profilePhoto])

            if(result.affectedRows > 0) console.log("DATABASE: Successfully added new user: " + data.username + " with ID: " + result.insertId)
            else console.log("DATABASE: Error adding new user: " + data.username) 
        }
        catch(e){
            console.log(e)
        }

        function do_encrypt(pw){
            return new Promise(async (res) => {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(pw, salt)
                res(hashedPassword)
            })
        }
    }, 
 
    findUser: async function(data) { 
        try{
            var doesUserExist = false 

            //Double check if JSON has username
            if (!data.username) throw createError[500]("JSON does not contain username")

            //Check SQL if user exists using the query below
            const [result] = await pool.query(`
            SELECT * 
            FROM users 
            WHERE username = ?
            `, [data.username])
            if(result[0]) doesUserExist = true

            return doesUserExist
        }
        catch(e){
            console.log(e)
        }
    },

    validateUser: async function(data){
        try {
            //Double check if JSON has username
            if (!data) throw createError[500]("No data found!")

            //Check SQL if user exists using the query below
            const [[result]] = await pool.query(`
            SELECT * 
            FROM users 
            WHERE username = ?
            `, [data.username])
 
            var isValid = await bcrypt.compare(data.password, result.password)

            return isValid 
          } catch (error) {
            console.log(error)
            throw error  
          }
    },

    getUserRole: async function(data){
        try{
            //Double check if JSON has username
            if (!data.username) throw createError[500]("JSON does not contain username")

            //Check SQL if user exists using the query below
            const [[result]] = await pool.query(`
            SELECT * 
            FROM users 
            WHERE username = ?
            `, [data.username])

            return result.role
        }
        catch(e){
            console.log(e)
        }
    },

    updateUser: function() { 
        
    },

    deleteUser: function() {
        
    }
}

export default db;
