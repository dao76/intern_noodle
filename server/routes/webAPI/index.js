const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const userController = require('../../components/users/controller')
const auth = require('../../components/middle/auth')

router.get('/login', auth.checkLogin, function (req, res, next) {
    res.render('login');
});

router.post('/login', async function (req, res, next) {
    const {username, password} = req.body
    const user = await userController.login(username, password)
    if (user) {
        const token = jwt.sign({_id: user._id, username: user.fullName}, 'mykey')
        req.session.token = token
        return res.redirect('/users')
    }
    res.redirect('login')
});

router.get('/logout', [auth.checkLogin], function (req, res, next) {
    req.session.destroy(function (err) {
      // nếu thành công thì chuyển đăng nhập
      res.redirect('/login');
    })
  });



// $2a$10$EZz/61RUu26yqBZ2zn56fO8wA5J3uyTO4RrLWaBGDqft2LzJNQWkW

module.exports = router;