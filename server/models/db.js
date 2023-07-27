import mysql from 'mysql2';

const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "cssecdv_db",
        password: "password"
    })

    console.log()

const database = {

    insertOne: async function(data) {
        try{
            connection.connect(err =>{
                if(err) throw err
            }) 

            const query = `INSERT INTO users (username, firstName, lastName, email, mobileNum, password, profilePhoto) VALUES (\"${data.username}\", \"${data.firstName}\", \"${data.lastName}\", \"${data.email}\", \"${data.mobileNum}\", \"${data.password}\", \"${data.profilePhoto}\")`
    
            connection.query(query, (err, res) => {
                if(err) throw err
                console.log(res) 
            })

            connection.end(err => {
                if(err) throw err  
            })
        }
        catch(e){
            console.log(e)
        }
    }, 
 
    insertMany: function() {
        
    },

    findOne: function() { 
        
    },
 
    findMany: function() {
         
    },

    findAll: function(){

    },

    updateOne: function() { 
        
    },

    updateMany: function() {
        
    },

    deleteOne: function() {
        
    },

    deleteMany: function() {
        
    },
    
    findOneAndDelete(){
        
    }
    
}

export default database;
