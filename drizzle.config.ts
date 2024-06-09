import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./utils/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:Ui5nT6jfXveN@ep-royal-mode-a5jm4v44.us-east-2.aws.neon.tech/ai-interview?sslmode=require",
  },
  verbose: true,
  strict: true,
});
