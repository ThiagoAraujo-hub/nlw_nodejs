import express, { json } from 'express';
import "reflect-metadata";
import "@database/index";
import { router } from './routes';

const app = express();

app.use(json());
app.use(router);

app.listen(3000, () => console.log('Server is running\nWaiting for a request...'))