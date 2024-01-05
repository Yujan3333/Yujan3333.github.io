import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('todo',function(table){
        table.increments('id');
        table.integer('user_Id').references('id').inTable('users');
        table.string('task').notNullable();
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('todo');
}

