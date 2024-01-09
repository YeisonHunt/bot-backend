import express from 'express';
import getRoot from '../controllers/root/getRoot';
import postRoot from '../controllers/root/postRoot';
import { getBots, saveBot, updateBot, resetBotsHandler, getRules, updateRule } from '../controllers/bot/botController';

const root = express.Router();

root.get('/', getRoot)
root.post('/', postRoot)
root.get('/bots', getBots);
root.post('/bots', saveBot);
root.put('/bots/:id', updateBot);
root.delete('/bots', resetBotsHandler);

root.get('/rules', getRules);
root.put('/rules/:id', updateRule);

export default root;