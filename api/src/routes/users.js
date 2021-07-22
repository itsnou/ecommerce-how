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
      wishlist: findUser.wishlist,
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
  const data = {
    resetPass: false,
    name: name,
    lastName: lastName,
    email: email,
    password: password,
    orders: [],
    wishlist: [],
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
  if (userEmail.userStatus === "Bloqueado") {
    return res.status(401).send({ message: "Acceso denegado" });
  }
  if (userEmail.resetPass){
    return res.send({ message: "reset pass" });
  }

  const jwtToken = jwt.sign(
    {
      id: userEmail._id,
      email: userEmail.email,
    },
    "secret",
    { expiresIn: "1d" }
  );
  if (userEmail.userStatus === "Admin")
    return res.send({ token: jwtToken, message: "on", admin: "on" });
  return res.send({ token: jwtToken, message: "on" });
});

router.put(
  "/upgradeuser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { userEmail } = req.body;
      const user = await userSchema.findOneAndUpdate(
        { email: userEmail },
        { userStatus: "Admin" }
      );
      res.send("Actualizado");
    } else {
      res.send("No tiene permisos ");
    }
  }
);
router.put(
  "/resetPass",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.body;
      const userDeleted = await userSchema.findByIdAndUpdate(id, {
        resetPass: true,
      });
      res.send("Usuario debe restablecer password");
    } else {
      res.status(401).send({ message: "No tiene acceso" });
    }
  }
);

router.put(
  "/blockuser",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    if (findUser.userStatus === "Admin") {
      const { id } = req.body;
      const userDeleted = await userSchema.findByIdAndUpdate(id, {
        userStatus: "Bloqueado",
      });
      res.send("Usuario bloqueado");
    } else {
      res.status(401).send({ message: "No tiene acceso" });
    }
  }
);

router.put(
  "/addorder",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { orderId } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const addOrder = await userSchema.findByIdAndUpdate(findUser._id, {
      $push: { orders: orderId },
    });
    res.send("Correcto");
  }
);

router.put(
  "/addwishlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { productId } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const addWish = await userSchema.findByIdAndUpdate(findUser._id, {
      $push: { wishlist: productId },
    });
    res.send("Correcto");
  }
);

router.put(
  "/removewishlist",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    const { productId } = req.body;
    const token = req.headers.authorization.split(" ");
    const decodificado = jwt_decode(token[1]);
    const findUser = await userSchema.findOne({ email: decodificado.email });
    const removeWish = await userSchema.findByIdAndUpdate(findUser._id, {
      $pull: { wishlist: productId },
    });
    res.send("Correcto");
  }
);

module.exports = router;
