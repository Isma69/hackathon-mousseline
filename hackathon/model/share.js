const db = require('../lib/prisma');

module.exports.createShare = async ({
  title,
  content,
  createdAt,
  author,
  type,
}) => {
  return await db.share.create({
    data: {
      title,
      content,
      createdAt,
      author,
      type,
    },
  });
};

module.exports.patchShare = async (data) => {
  return await db.share
    .update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        content: data.content,
        type: data.type,
      },
    })
    .catch((_) => false);
};

module.exports.getShare = () => {
  db.share.findMany({
    orderBy: {
      title: '',
      author: 'asc',
      type: '',
    },
  });
};

module.exports.deleteShare = (id) => {
  return db.share.delete({
    where: {
      id,
    },
  });
};
