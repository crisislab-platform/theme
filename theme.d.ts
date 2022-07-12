import type { Theme } from "@mui/material";

declare const theme: Theme;
export { theme };

declare module "@mui/material/styles" {
	interface Palette {
		geonet: Palette["primary"];
	}
	interface PaletteOptions {
		geonet: PaletteOptions["primary"];
	}
}
