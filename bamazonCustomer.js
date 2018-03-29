var mysql =require("mysql");
var inquirer = require("inquirer");

// Creating the connection information for the SQL database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // My username and password
    user: "root",
    password: "Charlotte#18!",
    database: "bamazonDB"
});

// Connection to the MySQL server and SQL database
connection.connect(function(error) {
    if (error) 
    throw error;
    else loadProducts();
    // Run the start function after the connection is made to prompt the user
    // showProducts();
    // console.log()
});


// function start() {
//     inquirer
//         .prompt({

//         })
// }