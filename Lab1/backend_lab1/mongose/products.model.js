const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    categoryId: { type: ObjectId, required: true }
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;
