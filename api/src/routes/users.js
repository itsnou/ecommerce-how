const { Router } = require("express");
const router = Router();
const userSchema = require("../models/users");
const jwt = require("jsonwebtoken");
const passport = require("passport");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    res.send("hey");
  }
);

router.post("/signup", async (req, res) => {
  const { name, lastName, email, address, password } = req.body;
  console.log(name);
  const data = {
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    orders: [],
  };
  try {
    const newUser = await new userSchema(data);
    await newUser.save();
    return res.send("Post OK");
  } catch (err) {
    return res.status(404).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userEmail = await userSchema.findOne({ email: email });
  if (!userEmail) {
    return res.send("No existe");
  }
  const validate = await userEmail.isValidPassword(password);
  if (!validate) {
    return res.send("Invalid password");
  }

  const jwtToken = jwt.sign(
    { id: userEmail._id, email: userEmail.email },
    "secret"
  );

  res.send(jwtToken);
});

module.exports = router;
