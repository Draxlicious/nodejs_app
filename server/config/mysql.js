const mysql = require("mysql")

    let conn = mysql.createConnection({
            host: "127.0.0.1",
            user: "root",
            password: "",
            database: "customers"
        })
    conn.connect((err)=>{
    if (err) throw err
    console.log("DB Connected");
})


module.exports = conn;

