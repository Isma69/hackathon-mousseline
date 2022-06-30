import { patchShare, deleteShare } from '../../../model/share';
import base from '../../../middleware/common';

const handlePatch = async (req, res) => {
  const shareToPatch = await patchShare(req.query.id);
  return res.status(201).send(shareToPatch);
};

const handleDelete = async (req, res) => {
  const shareToDelete = await deleteShare(req.query.id);
  return res.status(201).send(shareToDelete);
};

export default base().patch(handlePatch).delete(handleDelete);
