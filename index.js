import express from 'express';
import mongoose from 'mongoose';

import * as dotenv from 'dotenv';
dotenv.config();

import fs from 'fs';
import multer from 'multer';
import morgan from 'morgan';
import cors from 'cors';

import { checkAuth } from './utils/index.js';
import ProjectRouter from './routes/ProjectRouter.js';
import UserRouter from './routes/UserRouter.js';
// import { ProjectRouter, UserRouter } from './routes/index.js';

await mongoose
	.connect(process.env.DB_URL, { useNewURLParser: true, useUnifiedTopology: true })
	.then(() => console.log('connected to DB'))
	.catch((error) => console.log(`DB error: ${error}`));

const app = express();

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		if (!fs.existsSync('uploads')) {
			fs.mkdirSync('uploads');
		}
		cb(null, 'uploads');
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname);
	},
});
const upload = multer({ storage });

app.use(express.json());
app.use(cors());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));
app.use('/uploads', express.static('uploads'));

app.post('/api/upload', checkAuth, upload.single('image'), (req, res) => {
	res.json({
		url: `/uploads/${req.file.originalname}`,
	});
});
app.use('/api', ProjectRouter);
app.use('/api', UserRouter);

app.listen(process.env.PORT || 4444, (error) => {
	error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});
app.use((req, res) => {
	res.status(404).send('404 - Not found');
});
