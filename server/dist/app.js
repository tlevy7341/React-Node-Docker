"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors');
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send({ message: 'Hello World' });
});
app.listen('3001', () => {
    console.log('server running at http://localhost:3001');
});
