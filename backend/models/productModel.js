'use strict';

//import mongoose
const mongoose = require('mongoose');

//declare schema and assign schema class
const Schema = mongoose.Schema;

//create Schema Instance and add Schema properties
const ProductSchema = new Schema({
    category: {
        type: String,
        required: true
    },

    subcategory: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    currency: {
        type: String,
        required: true
    },

    likes_count: {
        type: Number,
        required: true
    },

    variation_0_color: {
        type: String,
        required: true
    },

    variation_1_color: {
        type: String,
        required: true
    },

    variation_0_thumbnail: {
        type: String,
        required: true
    },

    variation_1_thumbnail: {
        type: String,
        required: true
    },

    variation_0_image: {
        type: String,
        required: true
    },
    variation_1_image: {
        type: String,
        required: true
    },

    image_url: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    id: {
        type: Number,
        required: true
    },

    model: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model("products", ProductSchema);