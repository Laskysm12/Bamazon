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
    if (error) throw error;
    console.log("connected as id " + connection.threadId);

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        console.log(res);
      });
      connection.end();
    });

    // Run the start function after the connection is made to prompt the user
    // loadProducts();
    // console.log()

// Function to load the products table from the database and print results to the console
// function loadProducts() {
//     // Selects all of the data from the MySQL products table
//     connection.query("SELECT * FROM products", function(err, res) {
//       if (err) throw err;
//       console.log
  
//       // Draw the table in the terminal using the response
//     //   console.table(res);
  
//       // Then prompt the customer for their choice of product, pass all the products to promptCustomerForItem
//     //   promptCustomerForItem(res);
//     });
//   }

// function start() {
//     inquirer
//         .prompt({

//         })
// }