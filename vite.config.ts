import { defineConfig } from "vite";

export default defineConfig({
	build: {
		lib: {
			entry: "src/cn-dice.js", // Entry point for your library
			formats: ["es"], // Output format (ES modules)
			fileName: "cn-dice", // Output file name
		},
		rollupOptions: {
			external: /^lit/, // Treat 'lit' as an external dependency
		},
	},
});
