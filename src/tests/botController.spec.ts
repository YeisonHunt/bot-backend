import supertest from 'supertest'
import app from '../app'
import { bots, resetBots } from '../datalayer/bots';

describe('botController endpoints', () => {
    beforeEach(() => {
        resetBots();
    });

    test('get to /bots returns 200 and data', async () => {
        const result = await supertest(app).get('/bots')
        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual(bots);
    })

    test('post to /bots creates a bot', async () => {
        const newBot = { id: 1, title: 'Test Bot', completedActions: [] };
        const result = await supertest(app).post('/bots').send(newBot)
        expect(result.statusCode).toEqual(201)
        expect(result.body).toEqual(newBot);
    })

    test('put to /bots/:id updates a bot', async () => {
        const newBot = { id: 1, title: 'Test Bot', completedActions: [] };
        await supertest(app).post('/bots').send(newBot);
        const updatedBot = { ...newBot, title: 'Updated Bot' };
        const result = await supertest(app).put(`/bots/${newBot.id}`).send(updatedBot);
        expect(result.statusCode).toEqual(200)
        expect(result.body).toEqual(updatedBot);
    })

    test('delete to /bots resets bots', async () => {
        const result = await supertest(app).delete('/bots');
        expect(result.statusCode).toEqual(200)
        expect(result.body.message).toEqual('Bots reset successfully');
    })
})