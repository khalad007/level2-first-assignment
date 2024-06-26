import express from 'express';
import ProductController from './Product.controller';

const ProductRoute = express.Router();

ProductRoute.post('/', ProductController.CreateProduct);
ProductRoute.get('/', ProductController.GetProduct);


export default ProductRoute;
