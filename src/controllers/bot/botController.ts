import { RequestHandler } from 'express';
import { bots, rules, resetBots } from '../../datalayer/bots';
import { Bot } from '../../shared/types';

const getBots: RequestHandler = (req, res) => {
    res.status(200).json(bots);
}

const saveBot: RequestHandler = (req, res) => {
    const newBot = req.body as Bot;
    bots.push(newBot);
    res.status(201).json(newBot);
}

const updateBot: RequestHandler = (req, res) => {
    const { id } = req.params;
    const botIndex = bots.findIndex(bot => Number(bot.id) === Number(id));
    if (botIndex !== -1) {
        bots[botIndex] = req.body;
        res.status(200).json(req.body);
    } else {
        res.status(404).json({ message: 'Bot not found' });
    }
}

const resetBotsHandler: RequestHandler = (req, res) => {
    resetBots();
    res.status(200).json({ message: 'Bots reset successfully' });
}

const getRules: RequestHandler = (req, res) => {
    res.status(200).json(rules);
}

const updateRule: RequestHandler = (req, res) => {
    const { id } = req.params;
    const ruleIndex = rules.findIndex(rule => Number(rule.id) === Number(id));
    if (ruleIndex !== -1) {
        rules[ruleIndex] = req.body;
        res.status(200).json(req.body);
    } else {
        res.status(404).json({ message: 'Rule not found' });
    }
}

export { getBots, saveBot, updateBot, resetBotsHandler, getRules, updateRule };