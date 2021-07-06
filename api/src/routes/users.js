const { Router } = require("express");
const router = Router();
const userSchema = require("../models/users");

router.get("/", async (req, res) => {
  const { user } = req.query;
  if (user) {
    try {
      const getUsers = await userSchema.find();
      return res.send(getUsers);
    } catch (err) {
      return res.status(404).send("Users not found");
    }
  }
  const getAllUsers = await userSchema.find();
  return res.send(getAllUsers);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const usersById = await userSchema.findById(id);
    return res.send(usersById);
  } catch (err) {
    return res.status(404).send("User not found");
  }
});

router.post("/", async (req, res) => {
  const { name, lastName, email, userStatus, address, password } = req.body;
  const data = {
    name: name,
    lastName: lastName,
    email: email,
    userStatus: userStatus,
    address: address,
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

module.exports = router;
