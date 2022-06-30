const db = require("../db");

module.exports.createActuality = async ({
  title,
  content,
  createdAt,
  author,
  premise,
  urlPicture,
}) => {
  return await db.actuality.create({
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

module.exports.patchActuality = async (data) => {
  return await db.actuality
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

module.exports.findAllActualities = () =>
  db.actuality.findMany({
    orderBy: {
      id: 'desc',
    },
  });

module.exports.deleteActuality = (id) => {
  return db.actuality.delete({
    where: {
      id,
    },
  });
};
