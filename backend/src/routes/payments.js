import { Router } from "express";
import Stripe from "stripe";
import { env } from "../config/env.js";
import Card from "../models/Card.js";

const router = Router();
const stripe = new Stripe(env.STRIPE_SECRET_KEY);

// SetupIntent (Stripe Elements için)
router.post("/setup-intent", async (req, res) => {
  try {
    const intent = await stripe.setupIntents.create({});
    res.json({ clientSecret: intent.client_secret });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Kartı DB'ye kaydet (Stripe PM id ile)
router.post("/cards", async (req, res) => {
  try {
    const { userId, paymentMethodId, brand, last4, exp_month, exp_year } = req.body;
    // Not: brand/last4/exp bilgilerini frontend göndermezsen, stripe.paymentMethods.retrieve(paymentMethodId) ile çekebilirsin.
    const doc = await Card.create({
      userId, provider: "stripe", providerPmId: paymentMethodId,
      brand, last4, exp_month, exp_year
    });
    res.status(201).json(doc);
  } catch (e) { res.status(500).json({ error: e.message }); }
});

// Listele
router.get("/cards/:userId", async (req, res) => {
  const items = await Card.find({ userId: req.params.userId }).sort({ isDefault: -1, createdAt: -1 });
  res.json(items);
});

// Sil
router.delete("/cards/:id", async (req, res) => {
  const doc = await Card.findById(req.params.id);
  if (!doc) return res.status(404).json({ message: "Card not found" });
  await doc.deleteOne();
  res.json({ ok: true });
});

export default router;
