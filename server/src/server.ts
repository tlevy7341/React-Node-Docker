/** Imports */
import http from 'http';
import express, { Express } from 'express';
const cors = require('cors');
import { routes } from './routes/route';
const router: Express = express();
const httpServer = http.createServer(router)
const helmet = require('helmet')

/** App setup */
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(helmet());
router.use(cors());

/** Routes */
router.use(routes);

/** Server */
const PORT: string = '3001'
httpServer.listen(PORT, ()=> {
    console.log(`server running at http://localhost:${PORT}`);
})
