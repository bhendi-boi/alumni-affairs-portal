import express from "express";
import mongoose from "mongoose";
import Post from "./Post_db.js";
import Cors from "cors";
import { User, validate } from "./User_db.js";
import dotenv from "dotenv";
dotenv.config();
import Login from "./Login.js";
import bcrypt from "bcrypt";

//App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = `mongodb+srv://admin:xHhZ4EzlCDwtANXt@cluster0.edaecom.mongodb.net/?retryWrites=true&w=majority`;

//Middlewares
app.use(express.json());
app.use(Cors());

//DB config
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//Routes
app.use("/Login", Login);

//API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello Devil!");
});

app.post("/post", (req, res) => {
  const post_ = req.body;
  Post.create(post_, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get("/post", (req, res) => {
  Post.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/SignIn", async (req, res) => {
  // return res.status(200).send({ message: req.body });
  try {
    const { error } = validate(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already exists" });
    }
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new User({ ...req.body, password: hashPassword }).save();
    res.status(201).send({ message: "User created successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal server error!!" });
  }
});

//Listener
app.listen(port, () => {
  console.log(`listening on localhost at port:${port}`);
});
