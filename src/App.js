import React from "react";
import Button from "./components/Button";
//import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
	const theme = createMuiTheme({
		props: {
			// Name of the component ⚛️
			MuiIconButton: {
				edge: false,
				disabled: false,
				// disableAutoFocus: true,
				//border: "none",
				//size: "small",
				//disableFocusRipple: false,
				//outline: "none",
			},
		},
	});
	return <Navbar />;

	//return <Button/>
}

export default App;
