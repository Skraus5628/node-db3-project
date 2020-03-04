const db = require("../data/config")

function find(){

}

// SELECT * 
// FROM "schemes"



function findById(id){

}

// SELECT * 
// FROM "schemes"
// WHERE "Id" = "id"
// LIMIT 1

function findSteps(id){

    
}

// SELECT s."scheme_name", "step_number", "instructions"
// FROM "schemes" AS s
// JOIN "steps"
// ON s."id" = "steps"."scheme_id"


function add(scheme){

}


function update(changes, id){

}

function remove(id){

}

module.exports = {
    find,
}