import { createActuality, findAllActualities } from '../../../model/actuality';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const actualityPost = await createActuality(req.body);
  return res.status(201).send(actualityPost);
};

async function handleGet(req, res) {
  res.send(await findAllActualities());
}

export default base().post(handlePost).get(handleGet);
