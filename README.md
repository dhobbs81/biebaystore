<h1 align="center">
    <img src="assets/images/bieber-shirt.png"  alt="bieber 4 life">
</h1>

# A Node Based Store Front for J.Bieber Merch [![Awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

This is a node command-line application that processes orders for a Justin Bieber themed store. The application is written entirely in ES6 and transpiled using babel.

Running the app:
> DEBUG=* src/app.js

Building the app:
> npm run build

Building the docs:
> npm run docs

Browse the github documentation:
> npm docs

## Packages
- [babel-cli](https://www.npmjs.com/package/babel-cli)
- [chalk](https://www.npmjs.com/package/chalk)
- [commander](https://www.npmjs.com/package/commander)
- [debug](https://www.npmjs.com/package/debug)
- [jsdoc](https://www.npmjs.com/package/jsdoc)
- [inquirer](https://www.npmjs.com/package/inquirer)
- [mysql](https://www.npmjs.com/package/mysql)

## Overview

In this activity, you'll be creating an storefront for Justin Bieber themed merchandise with the MySQL skills you learned this week. The app will take in orders from customers and deplete stock from the store's inventory. As a bonus task, you can program your app to track product sales across your store's departments and then provide a summary of the highest-grossing departments in the store.

### Customer View 

1. Create a MySQL Database called `bieBay`.

2. Then create a Table inside of that database called `products`.

3. The products table should have each of the following columns:

   * item_id (unique id for each product)

   * product_name (Name of product)

   * department_name

   * price (cost to customer)

   * stock_quantity (how much of the product is available in stores)

   * autographed (boolean)

4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).

5. Then create a Node application called `bieBayCustomer.js`. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   * The second message should ask how many units of the product they would like to buy.

7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

## Examples

## License

[![CC0](assets/images/opensrc.png)](https://opensource.org/licenses/MIT)
To the extent possible under law, [Marcus Hobbs](https://github.com/dhobbs81) has waived all copyright and related or neighboring rights to this work.
