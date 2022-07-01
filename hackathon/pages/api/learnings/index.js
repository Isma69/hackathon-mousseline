import { createLearning, findAllLearning } from '../../../model/learning';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const learningPost = await createLearning(req.body);
  return res.status(201).send(learningPost);
};

async function handleGet(req, res) {
  res.send(await findAllLearning());
}

export default base().post(handlePost).get(handleGet);
