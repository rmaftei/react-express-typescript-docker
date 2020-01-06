import {Server} from "./app/Server";
import express from 'express';

const args = process.argv.slice(2);

const app = express();

const port = +args[0] || 8080;

const server = new Server(app);
server.start(port);
