const { Router } = require("express");
const router = Router();
const userSchema = require("../models/users");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const jwt_decode = require("jwt-decode");

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const returnedUser = {
      _id: findUser._id,
      address: findUser.address,
      orders: findUser.orders,
      userStatus: findUser.userStatus,
      name: findUser.name,
      lastName: findUser.lastName,
      email: findUser.email,
    };
    res.json(returnedUser);
  }
);

router.get(
  "/allusers",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const allUsers = await userSchema.find();
      res.send(allUsers);
    } else {
      res.status(401).send({ message: "No está autorizado" });
    }
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
    return res.status(201).send({ message: "Se creo correctamente" });
  } catch (err) {
    return res.status(404).send({ message: "No se creo correctamente" });
  }
});

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.params;
      const user = await userSchema.findById(id);
      console.log(user);
      res.send(user);
    } else {
      res.status(401).send({ message: "No tiene permisos" });
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const userEmail = await userSchema.findOne({ email: email });
  if (!userEmail) {
    return res.status(401).send({ message: "off" });
  }
  const validate = await userEmail.isValidPassword(password);
  if (!validate) {
    return res.status(401).send({ message: "off" });
  }

  const jwtToken = jwt.sign(
    { id: userEmail._id, email: userEmail.email },
    "secret",
    { expiresIn: "1d" }
  );

  res.send({ token: jwtToken, message: "on" });
});

router.put(
  "/upgradeuser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    console.log(findUser);
    if (findUser.userStatus === "Admin") {
      const { userEmail } = req.body;
      const user = await userSchema.findOneAndUpdate(
        { email: userEmail },
        { userStatus: "Admin" }
      );
      console.log(user);
      res.send("Actualizado");
    } else {
      res.send("No tiene permisos ");
    }
  }
);

router.delete(
  "/deleteuser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.body;
      const userDeleted = await userSchema.findByIdAndDelete({ _id: id });
      res.send("Usuario borrado");
    } else {
      res.status(401).send({ message: "No tiene acceso" });
    }
  }
);

module.exports = router;
