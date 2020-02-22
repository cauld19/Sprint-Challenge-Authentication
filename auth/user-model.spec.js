const db = require('../database/dbConfig.js');
const Users = require('./user-model');

describe('users model', () => {
    describe('add', () => {
        it('should insert the provided users into the db', async () => {
            await Users.add({ username: "mathew121", password: "hhhh" });

            const users = await db('users');
            expect(users).toHaveLength(1);
        })

        // it('should return inserted user', async () => {
        //     let user = await Users.add({ username: "big", password: "llll"});
        //     expect(user.username).toBe('big')
        //     expect(user.password).toBe('llll')
        // })
    })
})


// describe('users model', () => {
//     describe('find', () => {
        

//         it("findBy", async () => {
//             const res = await Users.findById(1);
//             expect(res.username).toMatch(/mathew/i);
//         });

//         it("find", async () => {
//             const res = await Users.find();
//             expect(res).toHaveLength(4);
//         });
//     })
// })


beforeEach(async () => {
    await db('users').truncate();
})