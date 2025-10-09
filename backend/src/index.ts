import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());

app.get '/api/health', (req: Request, res: Response) => {
  res.send('Healthy');
};

app.get('/api/tasks', (req: Request, res: Response) => {
  // Implement task retrieval logic
  res.json([{ id: 1, title: 'Task 1' }, { id: 2, title: 'Task 2' }]);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});