import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, ".");

  return {
    plugins: [react()],
    assetsInclude: ["**/*.PNG"], // This line includes PNG files
    define: {
      // Expose env variables to your app
      __VITE_API_URL__: JSON.stringify(env.VITE_API_URL),
    },
  };
});
