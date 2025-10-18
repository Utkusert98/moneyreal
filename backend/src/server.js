import { env } from "./config/env.js";
import { connectDB } from "./config/db.js";
import app from "./app.js";

const start = async () => {
  try {
    await connectDB();
    app.listen(env.PORT, () => console.log(`🚀 API running on :${env.PORT}`));
  } catch (e) {
    console.error("Startup error:", e);
    process.exit(1);
  }
};
start();
