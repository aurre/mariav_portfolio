const router = require('express').Router();
const {Message} = require('../db/models');

module.exports = router;


router.post('/', async (req, res, next) => {
    const newMessage = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    }
    try {
        const response = await Message.create(newMessage)
        res.status(201)
        res.send({
          message: 'Message created',
          response
        })
    } catch (error) {
      next(error);
    }
})
