// Include packages to make connections to mysql and
// prompt the user for input
var mysql = require("mysql");
var inquirer = require("inquirer");
var execSQL = require('exec-sql');
var path = require('path');

// Credentials used to connect to the SQL database
const credentials = { user: 'ubuntu', passwd: 'mm5138888!!' };

// Make a connection to the database
execSQL.connect('mysql', credentials.user, credentials.passwd );

// When the script successfully executes, set a flag
var sqlScripted = false;

// Execute all of the SQL scripts in the relative path
execSQL.executeDirectory(path.join(__dirname,'../assets/scripts'), function(err) {
    execSQL.disconnect();
    sqlScripted = true;
});

// Create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: credentials.user,
    password: credentials.passwd,
    database: "bieBay"
});

// When the sql connection succeeds, set a flag
var sqlConnected = false;

// Connect to the mysql server and sql database
connection.connect(function(err) {
    if (err) throw err;
    sqlConnected = true;
});

// Query the database and display the resulting product list
function listProducts() {
    // Display the set of products available for purchase
    connection.query("SELECT item_id,product_name,price FROM products", function(err, results) {
        if (err) throw err;

        // Print each row of the result
        results.forEach( (row) => {
            console.log(row.item_id + ", " + row.product_name + ", $" + row.price);
        });

        placeOrder();
    });
}

// Get the user's order
// If there is stock, update the database with order information
// Otherwise tell the user it's insufficient
function placeOrder() {

  // Get the product to purchase from the user
  inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is the ID of the product you would like to purchase?"
      },
      {
        name: "quantity",
        type: "input",
        message: "How many of the product do you want to purchase?"
      }
    ])
    .then(function(answer) {

        console.log("You want to purchase " + answer.quantity + " of product ID " + answer.id);

        // Make sure there is enough of the item to purchase
        connection.query(
            "SELECT price,stock_quantity FROM products WHERE item_id = ? LIMIT 1",
            {
                item_id: answer.id,
            },
            function(err, results) {
                if (err) throw err;

                var price = results[0].price;
                var stock = results[0].stock_quantity;
                console.log("The inventory of product ID " + answer.id + " is " + stock + " items");

                if (stock <= 0) {
                    console.log("Insufficient quantity to complete order");
                    connection.end();
                }
                else {

                    stock -= answer.quantity;

                    // Update the inventory amount with the amount purchased
                    connection.query(
                        "UPDATE products SET stock_quantity = ? WHERE item_id = ?",
                        [
                          {
                            stock_quantity: stock
                          },
                          {
                            item_id: answer.id
                          }
                        ],
                        function(err) {
                            if (err) throw err;
                            console.log("Total Cost of Order: $" + (price * answer.quantity));
                            connection.end();
                        }
                    );
                }
            }
        );
    });
}

// Configure the database, list products, get the user's order, update the database
function waitForDatabase() {

    if (!sqlScripted || !sqlConnected) {
        setTimeout(waitForDatabase, 10);
    }
    if (sqlScripted && sqlConnected) {
        console.log("Database configured and connected.");
        listProducts();
    }
}

// Start the chain of callbacks
waitForDatabase();
