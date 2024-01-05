import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("todo").del();

    // Inserts seed entries
    await knex("todo").insert([
        {
            id: 1,
            user_Id: 1,
            task: "backend assignment"
          }
    ]);
};
