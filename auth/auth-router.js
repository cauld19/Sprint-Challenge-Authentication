const router = require('express').Router();

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');

const Users = require('./user-model');

const secrets = require('../config/secrets');

router.post('/register', validateUser, (req, res) => {
  const user = req.body;

    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    Users.add(user)
            .then(user => {
                const token = genToken(user);
                res.status(201).json({user: user, token: token});
            })
            .catch(err => {
                res.status(500).json(err.message);
            })
});

router.post('/login', (req, res) => {
  let { username, password} = req.body;

  Users.findBy({username})
    .first()
    .then(user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = genToken(user);
        res.status(200).json({username: user.username, token: token})
      } else {
        res.status(401).json({message: "Invalid credentials"})
      }
    })
    .catch( err=> {
      res.status(500).json(err)
    })
});

// helper functions

function validateUser(req, res, next) {
  const postData = req.body;
  if(!postData) {
    res.status(400).json({ message: "missing user data" });
  } else if (!postData.username || !postData.password) {
    res.status(400).json({ message: 'missing required text field'})
  } else {
    next();
  }
}

function genToken(user) {
  const payload = {
      userid: user.id,
      username: user.username
  }

  const options = { expiresIn: '1h' };
  const token = jwt.sign(payload, secrets.jwtSecret, options);

return token;
}


module.exports = router;
