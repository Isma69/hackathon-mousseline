import { createSource, getSource } from '../../../model/source';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const sourcePost = await createSource(req.body);
  return res.status(201).send(sourcePost);
};

const handleGet = async (req, res) => {
  const sourceGet = await getSource();
  return res.status(201).send(sourceGet);
};

export default base().post(handlePost).get(handleGet);
