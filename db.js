import mysql from "mysql2"

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "pizza_db",
})

connection.connect ((err)=>{
    if(err) throw err;
    console.log("Connecetd to Mysql");
})

export default connection;