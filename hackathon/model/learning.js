const db = require('../db');

module.exports.createLearning = async ({
  title,
  content,
  createdAt,
  author,
  premise,
  urlPicture,
}) => {
  return await db.learning.create({
    data: {
      title,
      content,
      createdAt,
      author,
      premise,
      urlPicture,
    },
  });
};

module.exports.patchLearning = async (data) => {
  return await db.learning
    .update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        content: data.content,
        urlPicture: data.urlPicture,
      },
    })
    .catch((_) => false);
};

module.exports.findAllLearning = () =>
  db.learning.findMany({
    orderBy: {
      id: 'desc',
    },
  });

module.exports.deleteLearning = (id) => {
  return db.learning.delete({
    where: {
      id,
    },
  });
};
