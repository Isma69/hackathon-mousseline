const db = require("../db");

async function seed() {
  await db.actuality.deleteMany();
  await db.actuality.createMany({
    data: [
      {
        title: "Touche moi le paf",
        content: "Je suis un content qui sent le sarce",
        author: "Mc Gregor.C",
        premise: "Lyon",
        urlPicture: "",
      },
      {
        title: 'Touche moi l"abricot',
        content: "Je suis un content qui sent la moule",
        author: "Lisa Ann",
        premise: "Lyon",
        urlPicture: "",
      },
    ],
  });
}
seed();
module.exports = seed;
