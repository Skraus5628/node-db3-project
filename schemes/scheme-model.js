const db = require("../data/config")

function find(){
    return db("schemes")
}

// SELECT * 
// FROM "schemes"



function findById(id){
    return db("schemes")
    .where("Id", id)
    // .limit(1)

}

// SELECT * 
// FROM "schemes"
// WHERE "Id" = "id"
// LIMIT 1

function findSteps(id){
    return db("schemes as s")
    .join("steps", "s.id", "steps.scheme_id")
    .select("s.id","s.scheme_name", "steps.step_number", "steps.instructions")
    .where("s.id", id)
    .orderBy("steps.step_number")
    
}

// SELECT s."scheme_name", "step_number", "instructions"
// FROM "schemes" AS s
// JOIN "steps"
// ON s."id" = "steps"."scheme_id"
// ORDER BY "step_number"


function add(scheme){
    return db("schemes")
    .insert(scheme, )
}


function update(changes, id){
    return db("schemes")
    .update(changes)
    .where("id", id)
}

function remove(id){
    return db("schemes")
    .del()
    .where("id", id)
}

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
}