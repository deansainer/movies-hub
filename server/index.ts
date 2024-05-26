import express from 'express';
import cors from 'cors';
import { Request, Response } from 'express';
import MovieRouter from './routes/MovieRouter';

const app = express()

app.use(cors());

app.use(express.json())

app.use('/movies',MovieRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello YOOO')
})
app.listen(3001, () => {
    console.log('server is running');
})

