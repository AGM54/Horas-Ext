import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
import svgr from '@svgr/rollup';

export default defineConfig({
	plugins: [ svgr(), tailwindcss(), reactRouter(), tsconfigPaths()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './app/components'),
			'@modules': path.resolve(__dirname, './app/modules'),
			'@theme': path.resolve(__dirname, './app/theme'),
			'@mocks': path.resolve(__dirname, './app/mocks'),
			'@store': path.resolve(__dirname, './app/store'),
		},
	},
});
