import express from 'express';
import ProductController from './Product.controller';

const ProductRoute = express.Router();

ProductRoute.post('/', ProductController.CreateProduct);
ProductRoute.get('/', ProductController.GetProduct);
ProductRoute.get('/:productId', ProductController.GetProductById);

export default ProductRoute;
