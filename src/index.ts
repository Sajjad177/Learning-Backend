import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';

const app: Application = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded


//TODO : Application routes -> : 

app.use('/api/v1/students', StudentRoutes)


const getAController = (req: Request, res: Response) => {
  res.send('Hello World!');
};

// Route
app.get('/', getAController);

export default app;
