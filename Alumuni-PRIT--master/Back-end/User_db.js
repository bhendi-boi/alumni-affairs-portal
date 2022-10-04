import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  branch: String,
  linkedInProfileName: String,
  rollNo: String,
  phoneNumber: String,
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWRPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("User", UserSchema);

const validate = (data) => {
  const schema = joi.object({
    username: joi.string().required().label("User Name"),
    email: joi.string().required().label("Email"),
    password: joi.string().required().label("Password"),
    branch: joi.string().label("Branch").allow(""),
    linkedInProfileName: joi.string().allow("").label("Linked Name"),
    rollNo: joi.string().allow("").label("Roll No"),
    phoneNumber: joi.string().allow("").label("Phone Number"),
  });
  return schema.validate(data);
};

export { User, validate };
