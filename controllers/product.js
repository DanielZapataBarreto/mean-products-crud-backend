//Imports
import mongoose from 'mongoose';
import Product from '../models/product.js';

/**
 * Method which returns a list of products
 * @param {*} req request
 * @param {*} res response
 */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ data: products });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un Error en la Base de Datos.' });
  }
};

/**
 * Method which returns a product detail
 * @param {*} req request
 * @param {*} res response
 */
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    res.status(200).json({ data: product });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un Error en la Base de Datos.' });
  }
};

/**
 * Method which creates a new product
 * @param {*} req request
 * @param {*} res response
 */
export const createProduct = async (req, res) => {
  const { body } = req;
  const product = new Product(body);
  try {
    const savedProduct = await product.save();
    res.status(200).json({ data: savedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un Error en la Base de Datos.' });
  }
};

/**
 * Method which returns an updated product based on its id
 * @param {*} req request
 * @param {*} res response
 */
export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { $set: body },
      { new: true }
    );
    res.status(200).json({ data: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un Error en la Base de Datos.' });
  }
};

/**
 * Method which deletes a product based on its id
 * @param {*} req request
 * @param {*} res response
 */
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({
      message: `El Producto con id: ${id} fue eliminado correctamente.`,
    });
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un Error en la Base de Datos.' });
  }
};
