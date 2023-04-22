// This file is used to override the default webpack config using react-app-rewired

const path = require("path");

module.exports = function override(config, env) {
	//do stuff with the webpack config...
	return {
		...config,
		resolve: {
			...config.resolve,

			// Configure path aliases
			alias: {
				...config.resolve.alias,
				"@global": path.resolve(__dirname, "./src/global"),
				"@components": path.resolve(__dirname, "./src/components"),
				"@pages": path.resolve(__dirname, "./src/pages"),
				"@store": path.resolve(__dirname, "./src/store"),
				"@router": path.resolve(__dirname, "./src/router"),
				"@services": path.resolve(__dirname, "./src/services"),
				"@utilities": path.resolve(__dirname, "./src/utilities"),
			},
		},
	};
};
