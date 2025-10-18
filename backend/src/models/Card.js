import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  provider: { type: String, enum: ["stripe","paypal"], default: "stripe" },
  providerPmId: { type: String, required: true }, // Stripe paymentMethod id ya da PayPal vault id
  brand: String,      // visa/mastercard/paypal
  last4: String,
  exp_month: Number,
  exp_year: Number,
  isDefault: { type: Boolean, default: false },
}, { timestamps: true });

export default mongoose.model("Card", CardSchema);
