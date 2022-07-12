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
			main: "#8D0020",
		},
	},
	typography: {
		fontFamily: "acumin-pro, Roboto, sans-serif",
	},
});
const shadowColour = theme.palette.primary.main;
theme = {
	...theme,
	shadows: createShadows(shadowColour),
};

theme = responsiveFontSizes(theme, { breakpoints: ["sm", "md", "lg", "xl"], factor: 4 });

export { theme };
