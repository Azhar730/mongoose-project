import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.router';
const app: Application = express();
app.use(express.json());
app.use(cors());

// application routes
app.use('/api/v1/students', StudentRoutes)

const getController = (req: Request, res: Response) => {
  res.send('Hello World!');
}

app.get('/',getController );

export default app;