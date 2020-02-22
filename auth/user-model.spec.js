const db = require('../database/dbConfig.js');
const Users = require('./user-model');

describe('users model', () => {
    describe('add', () => {
        it('should insert the provided users into the db', async () => {
            await Users.add({ username: "mathew", password: "hhhh" });

            const users = await db('users');
            expect(users).toHaveLength(1);
        })
    })
})