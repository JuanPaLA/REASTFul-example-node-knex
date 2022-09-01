const  options  = require('./options/mariadb.js');
//const { options } = require('..')
const knex = require('knex')(options);

knex.schema.createTable('items', (table) => {
    table.increments('id').primary();
    table.string('nombre');
    table.string('categoria');
    table.integer('stock');
})
.then(() => {
    console.log('Tabla items creada');
})
.catch((err) => {
    console.log(err);
})
.finally(() => {
    knex.destroy();
});