const mysql = require('mysql')
const fs = require('fs')


const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user:process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_MYSQL_DATABASE
})
let counter = Number(fs.readFileSync('./static/dbErrorsCounter.txt', 'utf-8'))

db.connect((error) =>{
    if(error){
        fs.promises.writeFile('./logs/errors/db/error-' + counter++ + '.txt', JSON.stringify(error), 'utf-8')
        fs.promises.writeFile('../static/dbErrorsCounter.txt', String(counter), 'utf-8')
        console.error('Error al conectar a MySql')
       
    }
    else{
        console.log('Conectado con exito a la Base de datos')
    }
})

module.exports = db