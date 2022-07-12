import { createTheme, responsiveFontSizes } from "@mui/material";

import createShadows from "./shadows.js";

let theme = createTheme({
	palette: {
		primary: {
			main: "#1162A1",
		},
		secondary: {
			main: "#5ECAEB",
		},
		info: {
			main: "#30B7FF",
		},
		success: {
			main: "#157F1F",
		},
		warning: {
			main: "#FF7700",
		},
		error: {
			main: "#D00000",
		},
		geonet: {
			// Because this is a non-standard color, the light and dark variants need to be defiend manually
			main: "#8D0020",
			light: "#C34150",
			dark: "#590000",
			contrastText: "#FFF",
		},
	},
	typography: {
		fontFamily: "ManropeVariable, Manrope, acumin-pro, Roboto, sans-serif",
	},
});
const shadowColour = theme.palette.primary.main;
theme = {
	...theme,
	shadows: createShadows(shadowColour),
};

theme = responsiveFontSizes(theme, { breakpoints: ["sm", "md", "lg", "xl"], factor: 4 });

export { theme };
