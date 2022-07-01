import { patchSource, deleteSource } from '../../../model/source';
import base from '../../../middleware/common';

const handlePatch = async (req, res) => {
  const sourceToPatch = await patchSource(req.query.id);
  return res.status(201).send(sourceToPatch);
};

const handleDelete = async (req, res) => {
  const sourceToDelete = await deleteSource(req.query.id);
  return res.status(201).send(sourceToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
