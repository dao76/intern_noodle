const express = require('express');
const router = express.Router();

const userController = require('../../components/users/controller')
const auth = require('../../components/middle/auth')
const upload = require('../../components/middle/upload')

router.get('/', async function (req, res, next) {
    const users = await userController.getAll()
    res.render('users', { users });
});

router.get('/create', async function (req, res, next) {
    res.render('user_create');
});

router.post('/create', [upload.single('image')], async function (req, res, next) {
    let { body, file } = req
    if (file) {
        const img = 'http://192.168.12.61:3000/images/' + file.filename
        const noodles = [true, true, true]
        body = { ...body, noodles, role: 2, img }
    }
    await userController.insert(body)
    res.redirect('/users')
});

router.get('/:id/detail', async function (req, res, next) {
    const { id } = req.params
    const user = await userController.getById(id)
    res.render('user_detail', { user });
});

router.post('/:id/edit', [auth.checkLogin, upload.single('image')], async function (req, res, next) {
    let { body, file, params } = req
    if (file) {
        body.img = 'http://192.168.12.61:3000/images/' + file.filename
    }
    await userController.update(params.id, body)
    res.redirect('/users')
});

module.exports = router;