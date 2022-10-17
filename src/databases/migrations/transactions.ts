import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', table => {
    table.bigIncrements('id').unsigned().primary();
    table.string('sendername', 105).notNullable();
    table.string('receivername', 150).notNullable();
    table.string('accountnumber', 105).notNullable();
    table.decimal('amount', 8, 2);
    table.string('naration', 150).notNullable();
    table.timestamp('create_dt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('transactions');
}
