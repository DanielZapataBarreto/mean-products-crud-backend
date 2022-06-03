//Imports
import express from 'express';
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.js';

//Router
const router = express.Router();

/**
 * Route which lists products
 */
router.get('/', getAllProducts);

/**
 * Route which gives a product details
 */
router.get('/:id', getProduct);

/**
 * Route which creates a new product
 */
router.post('/', createProduct);

/**
 * Route which updates a product based on its id
 */
router.put('/:id', updateProduct);

/**
 * Route which deletes a product based on its id
 */
router.delete('/:id', deleteProduct);

export default router;
