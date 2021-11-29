const express= require('express');
const Routes= express.Router();

const {RabbitController}= require ('./../controllers/rabbitController');



Routes
    .get('/', RabbitController.loadmainPage );
Routes
    .get('/new', RabbitController.loadNewRabbit);
Routes
    .post('/', RabbitController.createNewRabbit);
Routes
    .get('/edit/:id', RabbitController.loadEditRabbit);
Routes
    .post('/:id', RabbitController.editRabbit);

Routes  
    .get('/:id', RabbitController.showRabbit);

Routes
    .post('/destroy/:id', RabbitController.deleteRabbit);









module.exports = {Routes};