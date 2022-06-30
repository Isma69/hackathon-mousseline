import { createShare, findAllShare } from '../../../model/share';
import base from '../../../middleware/common';

const handlePost = async (req, res) => {
  const sharePost = await createShare(req.body);
  return res.status(201).send(sharePost);
};

async function handleGet(req, res) {
  res.send(await findAllShare());
}

export default base().post(handlePost).get(handleGet);
