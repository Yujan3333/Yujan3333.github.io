import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            username: "Yujan",
            email: "yujan@deathnote.com",
            password: "$2b$10$YI4QAk4yALixkgLWwJdhH.KX8Q6De3/apmy4OcK8vDeR4qngVoOw2"
          }
    ]);
};
