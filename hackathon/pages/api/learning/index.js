import { createLearning, getLearning } from '../../../model/learning';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const learningPost = await createLearning(req.body);
  return res.status(201).send(learningPost);
};

const handleGet = async (req, res) => {
  const learningGet = await getLearning();
  return res.status(201).send(learningGet);
};

export default base().post(handlePost).get(handleGet);
