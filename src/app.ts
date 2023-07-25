import express, { Express, Request, Response } from 'express';
import dotenv from "dotenv";
import bot from "./bot/bot";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

bot.start().then(() => console.log("Bot started!"));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});