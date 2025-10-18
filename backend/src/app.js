import express from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import healthRouter from "./routes/health.js";
import paymentsRouter from "./routes/payments.js";

const app = express();
app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN, credentials: true }));
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/payments", paymentsRouter);

export default app;
