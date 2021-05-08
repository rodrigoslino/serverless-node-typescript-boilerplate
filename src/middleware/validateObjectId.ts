import { ObjectId } from "mongodb";

export const validateObjectId = (req, res, next) => {
  if (!ObjectId.isValid(req.params.id)) {
    return res.status(404).send("Invalid ID.");
  }

  next();
};
