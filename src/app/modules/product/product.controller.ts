import { Request, Response } from 'express';
import { z } from 'zod';
import ProductService from './Product.Service';
import { ProductValidation } from './Product.validate';

// create product
const CreateProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;

    // Zod validation
    const validatedProduct = ProductValidation.parse(productData);

    const result = await ProductService.CreateProductIntoDb(validatedProduct);

    res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof z.ZodError) {
      // Handle Zod validation errors
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        error,
      });
    } else {
      // Handle other errors
      res.status(500).json({
        success: false,
        message: 'An unexpected error occurred',
        error,
      });
    }
  }
};

const GetProduct = async (req: Request, res: Response) => {
  try {
    const searchterm: string = req.query.searchTerm as string;
    const result = await ProductService.GetProductFromDb(searchterm);
    if (searchterm) {
      res.status(200).json({
        success: true,
        message: `Products matching search term ${searchterm} fetched successfully!`,
        data: result,
      });
    } else {
      res.status(200).json({
        success: true,
        message: 'Products fetched successfully!',
        data: result,
      });
    }
  } catch (error: unknown) {
    console.log(error);
    res.status(400).json({
      success: false,
      messege: 'Unexpected error occurred',
      error,
    });
  }
};





const ProductController = {
  CreateProduct,
  GetProduct,
};

export default ProductController;
