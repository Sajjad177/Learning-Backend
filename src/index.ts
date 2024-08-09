// import express, { Application, Request, Response } from 'express';
// import cors from 'cors';

// const app: Application = express();
// const port = 3000;

// // Parser :

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello World!');
// });

// export default app;


import express, { Application, Request, Response } from 'express';
import cors from 'cors';

const app: Application = express();

// Middleware setup
app.use(cors()); // Enable CORS
app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true })); // For parsing application/x-www-form-urlencoded

// Route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
