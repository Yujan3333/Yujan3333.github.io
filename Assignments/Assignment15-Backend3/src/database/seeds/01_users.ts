import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    // Inserts seed entries
    await knex("users").insert([
        {
            id: 1,
            username: "Amulya",
            email: "belbase@frog.com",
            password: "$2b$10$YI4QAk4yALixkgLWwJdhH.KX8Q6De3/apmy4OcK8vDeR4qngVoOw2"
          },
          {
            id: 2,
            username: "rockdwayne",
            email: "rock@frog.com",
            password: "$2b$10$Zy8LhbojOAv3JZDMtga3FuMzzqZKmQAeo7j3KrMzgZS8YNIMTaXQC"
          },
          {
            id: 3,
            username: "akon",
            email: "akon@akon.com",
            password: "$2b$10$iu4Zcl.Qo.vVOn3XUAjoOepHo.qR8ErCm66HDPyChlX.YPsN5v6tS"
          }
    ]);
};
