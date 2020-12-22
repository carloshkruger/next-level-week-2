import Knex from 'knex';

export async function up(knexk: Knex) {
  return knexk.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    table
      .integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knexk: Knex) {
  return knexk.schema.dropTable('classes');
}
