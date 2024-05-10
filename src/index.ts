import express, { Request, Response,NextFunction } from 'express';
import taskRoutes from './routes/task';
import  dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3010;
app.use(express.json()); 


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express from!');
  });

app.use('/tasks', taskRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong');
  });


  app.listen(port, () => {
    console.log(`[Server]: Server running at http://localhost:${port}`);
  });

