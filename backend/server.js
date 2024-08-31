import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import { errorHandler, notFound } from './middleware/errormiddleware.js';
import cookieParser from 'cookie-parser';
const port = process.env.PORT || 5000;

import userRoutes from './routes/userRoutes.js';

import connectDB from './config/db.js';

connectDB();

const app = express();

app.use(express.json()); // Add this line to parse JSON bodies
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
