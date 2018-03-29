var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

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
  start();
});

function start() {
  connection.query("SELECT * FROM products", function(err, res) {
    if (err) throw err;
    console.table(res);
    // Run promptCustomerForItem, which will ask the user the item id and the desired # of units
    promptCustomerForItem(res);
  });
}

function promptCustomerForItem() {
  inquirer
    .prompt([
      {
        name: "productID",
        type: "input",
        message: "What is the ID of the product you would like to buy?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of the product would you like to buy?"
      }
    ])
    .then(function(answer) {
      console.log(answer);
      connection.query(
        "SELECT * FROM products WHERE item_id =" + answer.productID, function(err, results) {
            if (err) throw err;
            console.log(results);
        }   
      );
    });
}

// Add query database
// First
// will check whether user answer > quantity
// If then statement goes in the .then

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
