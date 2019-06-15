var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  port: 3306,
  user     : 'root',
  password : '',
  database : 'e_news'
});
 
//  var queryDone =  function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//     connection.end();
// }

// connection.query('SELECT 1 + 1 AS solution',(error, results, fields) =>{
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//     connection.end();
// });

/*Print table */
    connection.connect();
connection.query('SELECT * from categories',(error, results, fields) =>{
    if (error) throw error;
    console.log(results);
    connection.end();
});


/*insert table */

// var category = {caname: 'Chính trị'}
// connection.query('insert into categories set ?', category,(error, results, fields) =>{
//         if (error) throw error;
//         console.log(results);
//         connection.end();
//     });
    

console.log('after')