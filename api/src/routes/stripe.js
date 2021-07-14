const { Router } = require("express");
const router = Router();
const Stripe = require("stripe");
const stripe = new Stripe(
  "sk_test_51JDBoyGdIVmQXHqKwQXFP1XJ0d42nRpAeQytLMWVeUw2xjThbWl3bLLey8nc5C3s5UDMrGmUfLITpK5Qq3XkitHk00IjmUwInB"
);

router.post("/checkout", async (req, res) => {
  const { id, amount } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "HOUSE & WINES",
      payment_method: id,
    });
    res.send({ message: "Sucessfull payment" });
  } catch (error) {
    res.json({ message: error.raw.message });
  }
});

module.exports = router;
