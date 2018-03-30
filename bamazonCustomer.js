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
      var product_id;
      var purchaseQuantity;

      connection.query(
        "SELECT * FROM products WHERE item_id =" + answer.productID,
        function(err, results) {
          if (err) throw err;
          console.table(results);
          // Citing index 0 in the results array (only one object but it is necessary to cite index 0 of the results object)
          if (answer.quantity > results[0].stock_quantity) {
            console.log("Insufficient quantity!");
            start();
          } else {
            product_id = answer.productID;
            purchaseQuantity = answer.quantity;
            makePurchase(product_id, purchaseQuantity, results[0].price);
          }
        }
      );
    });
}

function makePurchase(product_id, quantity, price) {
  connection.query(
    // Updating the quantity ......
    "UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?",
    [quantity, product_id],
    function(error, res) {
      console.log("Total: " + quantity * price);
    }
  );
}
