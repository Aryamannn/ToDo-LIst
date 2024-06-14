import express, { json } from 'express';   //mongoose cors and dotenv
import { connect } from 'mongoose';
import cors from 'cors';
import { config } from 'dotenv';

config();

const app = express();
app.use(cors());
app.use(json());

connect(process.env.MONGOOSE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}). then (() => {
    console.log("Connected to MongoDB");
}). catch (() => {
    console.log("Error Connecting to MongoDB", error);
});

import todoRoutes from './routes/todoRoutes';
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server running on port ${PORT}');
});