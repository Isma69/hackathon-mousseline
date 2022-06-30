import { createSource, findAllSource } from '../../../model/source';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const sourcePost = await createSource(req.body);
  return res.status(201).send(sourcePost);
};

async function handleGet(req, res) {
  res.send(await findAllSource());
}

export default base().post(handlePost).get(handleGet);
