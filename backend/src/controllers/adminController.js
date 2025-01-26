// const Product = require('../models/NskProduct');
// const Order = require('../models/Order');

// Add Product
exports.addProduct = async (req, res) => {
    console.log("Received data:", req.body); // Log the incoming data to ensure it is as expected.

    const { title, description, price, category, brand, image_url, Model } = req.body;

    if (!title || !price || !category || !brand || !Model) {
        return res.status(400).json({
            message: "Missing required fields. Please include 'title', 'price', 'category', 'brand', and 'model'.",
        });
    }

    try {
        const product = await Product.create({
            title,
            description,
            price,
            category,
            brand,
            image_url,
            Model,
        });

        res.status(201).json({ message: 'Product added successfully', product });
    } catch (err) {
        console.error("Error:", err); // Log the error for better visibility.
        res.status(500).json({ message: 'Failed to add product', error: err.message });
    }
};



// Update Product
exports.updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        await Product.update(updates, { where: { id } });
        res.status(200).json({ message: 'Product updated successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to update product', error: err.message });
    }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        await Product.destroy({ where: { id } });
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Failed to delete product', error: err.message });
    }
};

// Check Orders
exports.getOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch orders', error: err.message });
    }
};

exports.getAllProducts = async (req,res) => {
    try {
        const products = await Product.findAll();
        res.status(200).json(products);
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};
