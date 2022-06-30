import { patchLearning, deleteLearning } from '../../../model/learning';
import base from '../../../middleware/common';

const handlePatch = async (req, res) => {
  const learningToPatch = await patchLearning(req.query.id);
  return res.status(201).send(learningToPatch);
};

const handleDelete = async (req, res) => {
  const learningToDelete = await deleteLearning(req.query.id);
  return res.status(201).send(learningToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
