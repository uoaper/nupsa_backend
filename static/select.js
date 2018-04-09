var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "NodeDataBase"
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports  = {
    select: function (callback) {
        var sql = "SELECT username , password FROM login ";
        con.query(sql, function (err, result , fields) {
            if (err) {
                callback("error", err)
            } else {
                callback("success", result)
            }
        });
    }
}