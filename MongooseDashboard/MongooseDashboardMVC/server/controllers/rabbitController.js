const {RabbitModel}= require('./../models/rabbitModel');


const RabbitController={

    loadmainPage: function (request,response){
        RabbitModel
        .findAllRabbits({})
        .then( results => {

            response.render('index', {rabbits:results});
        })
    },

    loadNewRabbit: function (request, response) {
        response.render('form');
    },

    createNewRabbit: function (request, response) {
        const name = request.body.name;
        const color = request.body.color;
    
        const newRabbit = {
            name,
            color,
        }
        RabbitModel
            .createRabbit(newRabbit)
            .then(result => {
     
            })
            .catch(err => {
                console.log("Something went wrong")
            })
    
        response.redirect("/rabbit");
    
    },

    loadEditRabbit: function (request, response) {
        RabbitModel
            .getRabbitById({ _id: request.params.id })
            .then(result => {
                response.render('edit', { rabbit: result });
            })
    },

    editRabbit: function (request, response) {
        const _id= request.params.id;
        const name = request.body.name;
        const color = request.body.color;
        newRabbit = {
            _id,
            name,
            color,
    
        }
        RabbitModel
     
     
        .updateRabbit(newRabbit)
        .then(result => {

            response.render('showRabbit', { rabbit: newRabbit });
        })
        .catch(err => {
            console.log("Something went wrong")
        })
    
        
    },

    showRabbit: function(request,response){
        RabbitModel
        .getRabbitById({_id:request.params.id})
        .then( result =>{
            response.render('showRabbit', {rabbit:result})

        })
    },

    deleteRabbit: function(request,response){

        RabbitModel
        .getRabbitById({_id:request.params.id})
        .then( result =>{
            result.remove();
            response.redirect('/rabbit');
    
        })
    
    },
    








}

module.exports={RabbitController}