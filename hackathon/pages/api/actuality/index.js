import { createActuality, getActuality } from '../../../model/actuality';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const actualityPost = await createActuality(req.body);
  return res.status(201).send(actualityPost);
};

const handleGet = async (req, res) => {
  const actualityGet = await getActuality();
  return res.status(201).send(actualityGet);
};

export default base().post(handlePost).get(handleGet);
