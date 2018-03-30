# Bamazon

Bamazon is an application that allows the user to experience an Amazon-like storefront, hence the name Bamazon.  The project makes use of various technologies, including node.js and MySQL.  The application takes in orders from customers (users) and depletes the stock from the store's inventory, which is housed in a MySQL database created by the developer.  

The user will first be presented with a table showing the grocery items for sale, a specific id number for each item, the price, department, and the available quantity.  Next the user will input his or her desired product id number and number of units he or she requires.  Upon submission of this information the application will check whether the store has enough of the product in stock to complete the request.  If there is not enough of an item in stock the user will be redirected to the table showing the available products.  If the user requests an amount less than the current stock quantity the requested number of units will be subtracted from the existing stock and the user will be notified that their purchase was successful and be given the total bill.

Further Information:
This application is good to break apart and study for anyone wishing to learn more about JavaScript, node.js, and MySQL.

Developer Information:
My name is Sam Lasky and I am currently a Full Stack Web Development Student at University of North Carolina at Charlotte.