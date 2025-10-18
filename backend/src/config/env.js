import 'dotenv/config';

export const env = {
  PORT: process.env.PORT || 5001,
  MONGODB_URI: process.env.MONGODB_URI,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || "",
  JWT_SECRET: process.env.JWT_SECRET || "dev-secret",
  CORS_ORIGIN: process.env.CORS_ORIGIN || "*",
};