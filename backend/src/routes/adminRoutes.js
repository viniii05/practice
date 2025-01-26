const express = require('express');
const adminController = require('../controllers/adminController');

const router = express.Router();


router.post('/add-product', adminController.addProduct);
router.put('/update-product/:id', adminController.updateProduct);
router.delete('/delete-product/:id', adminController.deleteProduct);
router.get('/orders', adminController.getOrders);
router.get('/', adminController.getAllProducts);
module.exports = router;
