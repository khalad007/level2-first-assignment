import { ProductInterface } from './Product.interface';
import ProductModel from './Product.model';

const CreateProductIntoDb = async (product: ProductInterface) => {
  const result = await ProductModel.create(product);
  return result;
};

const GetProductFromDb = async (searchterm: string) => {
  //eslint-disable-next-line
  const filterDoc: any = {};

  if (searchterm) {
    filterDoc.$or = [
      { name: { $regex: searchterm, $options: 'i' } },
      { description: { $regex: searchterm, $options: 'i' } },
      { category: { $regex: searchterm, $options: 'i' } },
      { tags: { $regex: searchterm, $options: 'i' } },
    ];
  }
  const result = await ProductModel.find(filterDoc);
  return result;
};






const ProductService = {
  CreateProductIntoDb,
  GetProductFromDb,

};
export default ProductService;
