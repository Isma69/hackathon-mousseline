const db = require('../db');

async function seed() {
  await db.actuality.deleteMany();
  await db.actuality.createMany({
    data: [
      {
        title: 'Actuality 1',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Mc Gregor.C',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
      {
        title: 'Actuality 2',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Lisa Ann',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
    ],
  });

  await db.learning.deleteMany();
  await db.learning.createMany({
    data: [
      {
        title: 'Learning 1',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Mc Gregor.C',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
      {
        title: 'Learning 2',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Lisa Ann',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
    ],
  });

  await db.share.deleteMany();
  await db.share.createMany({
    data: [
      {
        title: 'Share 1',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Mc Gregor.C',
        premise: 'Agence de Toulouse',
        type: 'Javascript',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
      {
        title: 'Share 2',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Lisa Ann',
        premise: 'Agence de Toulouse',
        type: 'Javascript',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
    ],
  });

  await db.source.deleteMany();
  await db.source.createMany({
    data: [
      {
        title: 'Source 1',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Mc Gregor.C',
        premise: 'Agence de Toulouse',
        type: 'Javascript',
        url: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
      {
        title: 'Source 2',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Lisa Ann',
        premise: 'Agence de Toulouse',
        type: 'Python',
        url: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        urlPicture:
          'https://img.freepik.com/vecteurs-libre/fond-technologie-numerique-fil-maille-reseau_1017-27428.jpg?w=2000',
      },
    ],
  });
}
seed();
module.exports = seed;
