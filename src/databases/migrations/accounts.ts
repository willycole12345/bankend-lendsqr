import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => {
    table.bigIncrements('id').unsigned().primary();
    table.string('firstname', 105).notNullable();
    table.string('lastname', 105).notNullable();
    table.string('accountnumber', 105).notNullable();
    table.decimal('balance', 8, 2);
    table.string('email', 150).notNullable();
    table.string('nationality', 150).notNullable();
    table.string('occupation', 150).notNullable();
    table.string('accounttype', 150).notNullable();
    table.string('address', 150).notNullable();
    table.timestamp('create_dt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('accounts');
}
