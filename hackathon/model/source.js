const db = require('../db');

module.exports.createSource = async ({
  title,
  content,
  createdAt,
  author,
  type,
  url,
  premise,
  urlPicture,
}) => {
  return await db.source.create({
    data: {
      title,
      content,
      createdAt,
      author,
      type,
      url,
      premise,
      urlPicture,
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
        url: data.url,
        urlPicture: data.urlPicture,
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
