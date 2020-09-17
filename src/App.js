import React from "react";
import Button from "./components/Button";
//import logo from "./logo.svg";
import Cards from "./components/Cards";
import "./App.css";
import Navbar from "./components/Navbar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PhotoGrid from "./components/PhotoGrid";
import Gallery from "./components/Gallery";
import CardWithReview from "./components/CardsWithReview";
import Footer from "./components/Footer";
import CartPage from "./components/CartPage";
import ProductPage from "./components/ProductPage";
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
	return <Navbar/> //return navigation bar
//	return <Footer />
}

export default App;
