const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', async (req, res) => {
    res.send('Test route');
});

router.post('/', async (req, res) => {
    const newPost = await Post.create(req.body);
    res.json(newPost);
});


module.exports = router;    