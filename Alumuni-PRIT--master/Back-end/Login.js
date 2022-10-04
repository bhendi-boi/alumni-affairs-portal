import express from "express";
import { User } from "./User_db.js";
import joi from "joi";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).send({ message: "Invalid Credentials" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(401).send({ message: "Invalid Credentails" });
    }
    const token = user.generateAuthToken();
    return res
      .status(200)
      .send({ data: token, message: "Logged in successful" });
  } catch (error) {
    res.status(500).send({ message: "Internal server Error" });
  }
});

const validate = (data) => {
  const schema = joi.object({
    email: joi.string().email().required().label("Email"),
    password: joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

export default router;
