const db = require('../lib/prisma');

module.exports.createSource = async ({
  title,
  content,
  createdAt,
  author,
  type,
  url,
}) => {
  return await db.source.create({
    data: {
      title,
      content,
      createdAt,
      author,
      type,
      url,
    },
  });
};

module.exports.patchSource = async (data) => {
  return await db.source
    .update({
      where: {
        id: data.id,
      },
      data: {
        title: data.title,
        content: data.content,
        type: data.type,
        url: data.type,
      },
    })
    .catch((_) => false);
};

module.exports.getSource = () => {
  db.source.findMany({
    orderBy: {
      title: '',
      author: 'asc',
      type: '',
    },
  });
};

module.exports.deleteSource = (id) => {
  return db.source.delete({
    where: {
      id,
    },
  });
};
