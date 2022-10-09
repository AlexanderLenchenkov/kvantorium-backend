import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();
import ProjectRouter from './routes/ProjectRouter.js';
import StudentRouter from './routes/StudentRouter.js';
import TeacherRouter from './routes/TeacherRouter.js';
import AdminRouter from './routes/AdminRouter.js';
import fileUpload from 'express-fileupload';
import * as path from 'path';
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use(fileUpload({}));
app.use(express.static('projects'));
app.use(express.static('presentations'));

async function connectDB() {
	await mongoose
		.connect(process.env.DB_URL, { useNewURLParser: true, useUnifiedTopology: true })
		.then(res => console.log('connected to DB'))
		.catch(error => console.log(error));
}
connectDB();

app.listen(process.env.PORT, error => {
	error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use('/api', ProjectRouter);
app.use('/api', StudentRouter);
app.use('/api', TeacherRouter);
app.use('/api', AdminRouter);

app.use((req, res) => {
	res.status(404).send('Error');
});
