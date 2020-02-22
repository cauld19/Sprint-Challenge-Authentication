const server = require('../api/server')
const request = require('supertest')

describe('server.js', () => {
    it('should set testing enviornment', () => {
        expect(process.env.DB_ENV).toBe('testing')
    })

    describe('GET /', () => {
        it('should return 200 OK', async () => {
            const res = await request(server).get('/api/jokes');
            expect(res.status).toBe(200);
        });
    })

    // it('should be json', async () => {
    //     const res = await request(server).get('/');
    //     expect(res.type).toBe('application/json');
    // })

    // it('should return the right object', async () => {
    //     const res = await request(server).get('/');
    //     expect(res.body).toEqual({ api: 'up' });
    // })
})