const { Router } = require("express");
const router = Router();
const VarietalSchema = require("../models/varietals");

router.get("/", async (req, res) => {
  try {
    const allVarietals = await VarietalSchema.find();
    return res.send(allVarietals);
  } catch (err) {
    return res.status(404).send("No se encontraron varietales.");
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const data = {
      name: name,
    };
    const newVarietal = await new VarietalSchema(data);
    await newVarietal.save();
    return res.send("Post Ok");
  } catch (err) {
    return res.status(404).send("No se puede crear");
  }
});

router.delete("/", async (req, res) => {
  const { id } = req.body;
  const deletedVarietal = await VarietalSchema.findByIdAndDelete({
    _id: id,
  });
  res.send(`se borró el varietal ${deletedVarietal.name}`);
});

module.exports = router;
