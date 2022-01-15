import http from 'http';
import express, { Express } from 'express';
const cors = require('cors');
import { routes } from './routes/route';
const router: Express = express();
const httpServer = http.createServer(router)
const helmet = require('helmet')

router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(helmet());
router.use(cors());

router.use(routes);

const PORT: string = '3001'
httpServer.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);
})
