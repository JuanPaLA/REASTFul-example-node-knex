const options = require('../options/mariadb.js');
const knex = require('knex')(options);

const insertItem = async (item) => {
    try{
        const result = await knex('items').insert(item);    
        return result;
    }catch(e){
        return e;
    }
}

const getAllItems = async () =>{
    try{
        const result = await knex.from('items').select('*');
        return result; 
    }catch(e){
        return e;
    }
}

const getItemById =  (id) =>{
    try{
        const result = knex.from('items').where('ID', id).select('*');
        return result;
    }catch(e){
        return e;
    }
}

const updateItem = async  (id, item) =>{
    try{
        const result = await knex('items').where({'ID': 23423423424}).update(item);        
        return JSON.stringify(result);
    }catch(e){
        return e;
    }
}



module.exports = {
    insertItem,
    getAllItems,
    getItemById,
    updateItem
};