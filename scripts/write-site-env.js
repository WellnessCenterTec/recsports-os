const fs = require("fs");
const path = require("path");

const env = {
  SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || "",
  SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
};

const output = `window.RECSPORTS_ENV = ${JSON.stringify(env, null, 2)};\n`;
fs.writeFileSync(path.join(__dirname, "..", "site", "env.js"), output, "utf8");
console.log("Generated site/env.js");
