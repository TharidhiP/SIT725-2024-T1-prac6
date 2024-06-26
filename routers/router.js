var express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');

router.post('/api/card',(req,res) => {
    controller.createCard(req,res);
    });

    router.get('/api/cards',(req,res) => {
        controller.getAllCards(req,res);
    });

    router.delete('/api/card', (req,res) => {
        controller.deleteCard(req,res);
    });

    module.exports = router;