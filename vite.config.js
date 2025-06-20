import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
const withMT = require("@material-tailwind/html/utils/withMT");

// https://vite.dev/config/
module.export = withMT({
  plugins: [tailwindcss(), react()],
});
