/**
 * Created by saurabhagarwal on 7/11/17.
 */


const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'somedatabase',
    user: 'someuser',
    password: 'somepass'
})
// connection.query (
//     'SELECT * FROM courses',
//     function(err, results, fields) {
//
//         if(err) throw err;
//
//         console.log("Results = ");
//         console.log(results);
//         console.log("Fields = ");
//         console.log(fields);
//     }
// )

connection.query(
    "INSERT INTO courses(id,name) VALUES(2,'CRUX')",
    function (err,results,fields) {
        if(err) throw err;

        console.log("Results = ");
        console.log(results);
        console.log("Fields = ");
        console.log(fields);
    }
)