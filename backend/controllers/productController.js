// import products model
const Product = require("../models/productModel");

// DEFINE CONTROLLER FUNCTIONS

//listAllProducts function - to list all products
exports.listAllProducts = (req,res) => {
    Product.find({}, (err, product) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(product);
    });
};

exports.listAllMenProducts = (req,res) => {
    Product.find({ 'category': 'men' }, (err, men) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(men);
    });
}

exports.listAllWomenProducts = (req,res) => {
    Product.find({ 'category': 'women' }, (err, women) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(women);
    });
}

exports.listAllKidsProducts = (req,res) => {
    Product.find({ 'category': 'kids' }, (err, kids) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(kids);
    });
}

exports.listAllAccessories = (req,res) => {
    Product.find({ 'category': 'accessories' }, (err, accessories) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(accessories);
    });
}

exports.listAllJewelry = (req,res) => {
    Product.find({ 'category': 'jewelry' }, (err, jewelry) => {
        if (err) {
            res.status(500).send(err);
        }
        res.set('content-type', 'application/json').status(200).json(jewelry);
    });
}