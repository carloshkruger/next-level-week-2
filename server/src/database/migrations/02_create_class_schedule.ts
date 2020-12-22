import Knex from 'knex';

export async function up(knexk: Knex) {
  return knexk.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary();
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();

    table
      .integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knexk: Knex) {
  return knexk.schema.dropTable('class_schedule');
}
