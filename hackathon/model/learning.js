const db = require('../lib/prisma');

module.exports.createLearning = async ({
  title,
  content,
  createdAt,
  author,
}) => {
  return await db.learning.create({
    data: {
      title,
      content,
      createdAt,
      author,
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
      },
    })
    .catch((_) => false);
};

module.exports.getLearning = () => {
  db.learning.findMany({
    orderBy: {
      title: '',
      author: 'asc',
    },
  });
};

module.exports.deleteLearning = (id) => {
  return db.learning.delete({
    where: {
      id,
    },
  });
};
