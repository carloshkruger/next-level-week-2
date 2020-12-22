import Knex from 'knex';

export async function up(knexk: Knex) {
  return knexk.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  });
}

export async function down(knexk: Knex) {
  return knexk.schema.dropTable('users');
}
