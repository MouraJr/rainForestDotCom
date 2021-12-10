'use strict';

// create app function
const allProductsRoute = (app) => {
    var productList = require('../controllers/productController');

    // Products routes

    // GET request for / endpoint for all products"
    app.route("/").get(productList.listAllProducts);

    //GET request for /men endpoint for all products in the men category
    app.route("/men").get(productList.listAllMenProducts);

    //GET request for /women endpoint for all products in the women category
    app.route("/women").get(productList.listAllWomenProducts);

    //GET request for /kids endpoint for all products in the kids category
    app.route("/kids").get(productList.listAllKidsProducts);

    //GET request for /accessories endpoint for all products in the accessories category
    app.route("/accessories").get(productList.listAllAccessories);

    //GET request for /jewelry endpoint for all products in the jewelry category
    app.route("/jewelry").get(productList.listAllJewelry);
};

module.exports = allProductsRoute