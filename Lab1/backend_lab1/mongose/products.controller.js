const ProductModel = require('./products.model');
const connectDb = require('../model/db');

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get product by ID
const getProductById = async (req, res) => {
    try {
        const product = await ProductModel.findById(req.params.id);
        if (product) {
            res.status(200).json(product);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new product
const createProduct = async (req, res) => {
    const { name, description, price, image, categoryId } = req.body;
    const newProduct = new ProductModel({ name, description, price, image, categoryId });

    try {
        const savedProduct = await newProduct.save();
        res.status(201).json(savedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update product
const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete product
const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(req.params.id);
        if (deletedProduct) {
            res.status(200).json({ message: 'Product deleted' });
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Search products by keyword
const searchProducts = async (req, res) => {
    try {
      const db = await connectDb();
      const productCollection = db.collection('products');
      const products = await productCollection.find({ name: new RegExp(req.params.keyword, 'i') }).toArray();
      if (products.length > 0) {
        res.status(200).json(products);
      } else {
        res.status(404).json({ message: 'Không tìm thấy' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    searchProducts
};
