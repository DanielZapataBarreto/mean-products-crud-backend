//Imports
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import dbConnection from './config/mongo.js';
import productRoutes from './routes/product.js';

//Enable using environment variables
dotenv.config();

const PORT = process.env.PORT || 4001;

//App
const app = express();

//Enable using JSON and CORS
app.use(cors());
app.use(express.json());

//Routes
app.use('/api/v1/product', productRoutes);

//Db Connection
dbConnection();

//App ready!!
app.listen(PORT, () => {
  console.log(
    `La aplicación está lista en el puerto ${PORT}, puedes acceder a ella desde: http://localhost:${PORT}`
  );
});
