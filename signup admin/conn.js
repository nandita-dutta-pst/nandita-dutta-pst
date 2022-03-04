//For connection

let mysql = require("mysql");
let conn=  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    db:"pst"
});
conn.connect((err)=>{
    if(err){
        console.log(err);

    }
    else{
        console.log("connected");
    }
});



module.exports = conn;