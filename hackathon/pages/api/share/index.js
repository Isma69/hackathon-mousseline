import { createShare, getShare } from '../../../model/share';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const sharePost = await createShare(req.body);
  return res.status(201).send(sharePost);
};

const handleGet = async (req, res) => {
  const shareGet = await getShare();
  return res.status(201).send(shareGet);
};

export default base().post(handlePost).get(handleGet);
