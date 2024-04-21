let model = require('../models/dog-card');

// creation of card
const createCard = (req,res) => {
    let card = req.body;
       model.insertCard(card, (err, result) => {
        if(err){
            res.json({statusCode: 400, message: err});
        } else{
            res.json({statusCode: 200, data: result, message: 'Card Successfully Added'});
        }
       }) ;
}

// retrieval of card 
const getAllCards= (req,res) => {
      model.getAllCards((err, result) => {
            if(err){
                res.json({statusCode: 400, message: err});
            } else{
                res.json({statusCode: 200, data: result, message: 'Card Successfully Retrieved'});
            }
        });
}

const deleteCard = (req,res) => {
    let card = req.body;
    model.remove(card, (error,result) => {
        if(error) {
            res.json({statusCode: 400, message: error});
        } else {
            res.json({statusCode: 200, data: result, message: 'Successfully removed'});
        }
    });
}

module.exports = {createCard , getAllCards, deleteCard}