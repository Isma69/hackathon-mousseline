const db = require('../db');

async function seed() {
  await db.actuality.deleteMany();
  await db.actuality.createMany({
    data: [
      {
        title: 'Touche moi le paf',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Mc Gregor.C',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
      {
        title: 'Touche moi l"abricot',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Lisa Ann',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
    ],
  });
}
seed();
module.exports = seed;
