const twForms = require("@tailwindcss/forms");
const colors = require("./src/global/tailwind-config/colors.config");
const { fontFamily } = require("./src/global/tailwind-config/typography.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	plugins: [twForms({ strategy: "class" })],
	theme: {
		colors,
		fontFamily,
		extend: {},
	},
	plugins: [],
};
