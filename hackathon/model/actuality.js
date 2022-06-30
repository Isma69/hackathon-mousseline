const db = require("../lib/prisma");

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
      },
    })
    .catch((_) => false);
};

module.exports.getActuality = () => {
  db.actuality.findMany({
    orderBy: {
      title: "",
      author: "asc",
    },
  });
};

module.exports.deleteActuality = (id) => {
  return db.actuality.delete({
    where: {
      id,
    },
  });
};
