import { patchActuality, deleteActuality } from '../../../model/actuality';
import base from '../../../middleware/common';

const handlePatch = async (req, res) => {
  const actualityToPatch = await patchActuality(req.query.id);
  return res.status(201).send(actualityToPatch);
};

const handleDelete = async (req, res) => {
  const actualityToDelete = await deleteActuality(req.query.id);
  return res.status(201).send(actualityToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
