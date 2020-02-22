const db = require('../database/dbConfig.js');

module.exports = {
    add,
    findBy,
    findById,
    find
};

function find() {
    return db('users')
  }

function add(user) {
    return db('users')
        .insert(user)
        .then(ids => {
            return findById(ids[0]);
        });
}

function findById(id) {
    return db('users')
      .where({ id })
      .first();
}

function findBy(search) {
    return db('users')
      .select('id', 'username', 'password')
      .where(search)
}