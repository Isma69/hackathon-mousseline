const db = require('../db');

async function seed() {
  await db.actuality.deleteMany();
  await db.actuality.createMany({
    data: [
      {
        title: 'Microsoft build 2022 : les 5 annonces à retenirs! ',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Merry Anders',
        premise: 'Agence de Toulouse',
        urlPicture:
          'https://www.formatiques.com/wp-content/uploads/sites/61/2022/01/gestionaire-de-facturation.jpg',
      },
      {
        title: 'JavaScript: Meta bascule Jest en OpenSource',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Stella Adler',
        premise: 'Agence de Rennes',
        urlPicture:
          'https://www.mandyben-formation.com/wp-content/uploads/2021/10/formation-java-jee.jpg',
      },
      {
        title: 'Les 10 langages de programmation les plus populaires',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Donna Anderson',
        premise: "Agence de d'Orléans",
        urlPicture:
          'https://www.ynov.com/wp-content/uploads/2022/01/developpeur-logiciel-ynov.jpg',
      },
      {
        title: 'GitHub : un flu algorithimique divise',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Amy Adams',
        premise: 'Agence de Paris',
        urlPicture: 'https://www.capcampus.com/img/u/1/developpeur-web.jpg',
      },
    ],
  });

  await db.learning.deleteMany();
  await db.learning.createMany({
    data: [
      {
        title:
          'Apprendre comment créer une application web avec Flask en Python 3',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Cynthia Addai-Robinson',
        premise: 'Agence de Niort',
        urlPicture:
          'http://www.collegium-idf.fr/wp-content/uploads/2016/11/S%C3%A9curisez-votre-entreprise-gr%C3%A2ce-%C3%A0-une-entreprise-sp%C3%A9cialis%C3%A9e-en-s%C3%A9curit%C3%A9-informatique.jpg',
      },
      {
        title:
          'Verifier automatiquement vos docuements grace à une solution API',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Beverly Aadland',
        premise: 'Agence de Dijon',
        urlPicture:
          'https://www.solantis.fr/wp-content/uploads/2020/11/istockphoto-1169999045-612x612-1.jpg',
      },
      {
        title: 'Introduction au framework web Angular',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Iris Adrian',
        premise: 'Agence de Lyon',
        urlPicture:
          'https://www.educatel.fr/wp-content/uploads/2021/04/metier-developpeur-web-1.jpg',
      },
      {
        title: "Tutoriel sur la sécurisation d'un repo Git",
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Alina Lopez',
        premise: 'Agence de Brest',
        urlPicture:
          'https://www.educatel.fr/wp-content/uploads/2021/04/metier-developpeur-web-2.jpg',
      },
    ],
  });

  await db.share.deleteMany();
  await db.share.createMany({
    data: [
      {
        title: 'Forum du devellopement',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Barrett Blade',
        premise: 'Agence de Lille',
        type: 'JavaScript',
        urlPicture:
          'https://www.silicon.fr/wp-content/uploads/2019/04/shutterstock_266864006-684x513.jpg',
      },
      {
        title:
          "CodeShare, partagez du code en temps réel avec d'autres developpeurs",
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Mike Horner',
        premise: 'Agence de Nice',
        type: 'PhP',
        urlPicture:
          'https://www.ittel.fr/upload/b31fab6ef08d6b5ec16c1085a04f3f03.jpg',
      },
      {
        title: 'Tips C#',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Jonathan Koppenhaver',
        premise: 'Agence de Bordeaux',
        type: 'C#',
        urlPicture:
          'https://fiches-pratiques.chefdentreprise.com/Assets/Img/FICHEPRATIQUE/2021/12/368384/Les-formations-devenir-developpeur-application-mobile-F.jpg',
      },
      {
        title: 'Share 2',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'James Bonn',
        premise: 'Agence de Tours',
        type: 'Java',
        urlPicture:
          'https://blog.mynextcompany.eu/hs-fs/hubfs/market-belgium-1.jpg?width=1000&name=market-belgium-1.jpg',
      },
    ],
  });

  await db.source.deleteMany();
  await db.source.createMany({
    data: [
      {
        title: 'Doc ReactJS',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Anthony Crane',
        premise: 'Agence de Nantes',
        type: 'Javascript',
        url: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        urlPicture:
          'https://formadis.fr/wp-content/uploads/2021/12/formation-developpement-webforce3-1200x800-1.jpg',
      },
      {
        title: 'Doc Python',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Johnny Castle',
        premise: 'Agence de Le Mans',
        type: 'Python',
        url: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        urlPicture:
          'https://cdn.futura-sciences.com/buildsv6/images/wide1920/f/4/5/f455c34ebd_50161810_intelligence-artificielle1.jpg',
      },
      {
        title: 'Doc C++',
        content:
          ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede.',
        author: 'Rod Fontana',
        premise: 'Agence de Paris',
        type: 'C++',
        url: 'https://fr.wikipedia.org/wiki/Wikip%C3%A9dia:Accueil_principal',
        urlPicture: 'https://www.eotim.com/previews/externalisation-hr.png',
      },
    ],
  });
}
seed();
module.exports = seed;
