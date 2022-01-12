import express, {Application, Request, Response, NextFunction } from 'express';
const cors = require('cors');

const app: Application = express();
app.use(express.json());
app.use(cors());
const PORT: string = '3001'



app.get('/', (req: Request, res: Response) => {
    res.send({message: 'Hello World'});
})

app.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);
})
