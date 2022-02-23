const express = require('express');

const userController = require('../controllers/UserController');

const router = express.Router();

//router.post
router.post('/', userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.newUser)
  });





module.exports = router;