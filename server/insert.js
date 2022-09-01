const  options  = require('../options/mariadb.js');
const knex = require('knex')(options);

const insertItem = async (item) => {
    try{
        const result = await knex('items').insert(item);
        console.log(result);
        return result;
    }catch(e){
        console.log({'error': e});
    }
}

insertItem({nombre: 'coso', stock:20, categoria: 'cosa'})