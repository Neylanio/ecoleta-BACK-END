import Knex from 'knex';

export async function up(knex: Knex){
    return knex.schema.createTable('points', table => {
        table.increments('id').primary();
        table.string('image').nullable();
        table.string('name').nullable();
        table.string('email').nullable();
        table.string('whatsapp').nullable();
        table.string('latitude').nullable();
        table.string('longitude').nullable();
        table.string('city').nullable();
        table.string('uf').nullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('points');
}