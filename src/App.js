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
	return <Navbar/>//returns navigation bar
	//return <Footer />
}

export default App;

// import React from "react";
// import PropTypes from "prop-types";
// import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Badge from "@material-ui/core/Badge";
// import PermIdentityIcon from "@material-ui/icons/PermIdentity";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import InputBase from "@material-ui/core/InputBase";
// import SearchIcon from "@material-ui/icons/Search";
// const useStyles = makeStyles((theme) => ({
// 	// This group of buttons will be aligned to the right
// 	rightToolbar: {
// 		marginLeft: "auto",
// 		marginRight: -12,
// 	},
// 	typ: {
// 		marginLeft: "auto",
// 		marginRight: "auto",
// 	},

// 	appBarBg: {
// 		backgroundColor: "#222F3E",
// 		//height: "90px",
// 	},
// 	menuButton: {
// 		height: "90px",
// 		marginRight: "auto",
// 	},
// 	search: {
// 		position: "relative",
// 		borderRadius: 20,
// 		border: "1px solid white",
// 		backgroundColor: "#222F3E",
// 		"&:hover": {
// 			backgroundColor: "#222F3E",
// 		},
// 		marginRight: theme.spacing(2),
// 		marginLeft: 30,
// 		width: "50%",
// 		[theme.breakpoints.up("sm")]: {
// 			marginLeft: theme.spacing(3),
// 			width: "50%",
// 			//marginTop: "30px",
// 		},
// 	},
// 	searchIcon: {
// 		padding: theme.spacing(0, 2),
// 		height: "100%",
// 		position: "absolute",
// 		pointerEvents: "none",
// 		display: "flex",
// 		alignItems: "center",
// 		justifyContent: "center",
// 		//marginLeft: "90%",
// 		background: "white",
// 		borderTopLeftRadius: 20,
// 		borderBottomLeftRadius: 20,
// 		color: "#222F3E",
// 		border: "1px solid white",
// 	},
// 	inputRoot: {
// 		color: "inherit",
// 	},
// 	inputInput: {
// 		padding: theme.spacing(1, 1, 1, 0),
// 		//vertical padding + font size from searchIcon
// 		paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
// 		transition: theme.transitions.create("width"),
// 		width: "100%",
// 		[theme.breakpoints.up("md")]: {
// 			width: "100%",
// 		},
// 	},

// 	icons: {
// 		height: "120px",
// 		marginRight: "auto",
// 		[theme.breakpoints.up("md")]: {
// 			//marginLeft: theme.spacing(3),
// 			marginRight: 50,
// 		},
// 	},
// }));

// export default function Demo() {
// 	const classes = useStyles();

// 	return (
// 		<AppBar position="static" className={classes.appBarBg} elevation={0}>
// 			<Toolbar>
// 				{/* <IconButton
// 					className={classes.menuButton}
// 					aria-label="Menu"
// 					color="inherit"
// 				></IconButton> */}
// 				<Typography variant="title" color="inherit" className={classes.typ}>
// 					LOGO
// 				</Typography>
// 				<div className={classes.search}>
// 					<div className={classes.searchIcon}>
// 						<SearchIcon style={{ fontSize: "20px" }} />
// 					</div>
// 					<InputBase
// 						//placeholder="Search…"
// 						classes={{
// 							root: classes.inputRoot,
// 							input: classes.inputInput,
// 						}}
// 						inputProps={{ "aria-label": "search" }}
// 					/>
// 				</div>

// 				<section className={classes.rightToolbar}>
// 					<IconButton
// 						color="inherit"
// 						aria-label="Edit"
// 						className={classes.icons}
// 						style={{ outline: "none" }}
// 					>
// 						<Badge badgeContent={4} color="secondary">
// 							<ShoppingCartIcon style={{ fontSize: "20px" }} />
// 						</Badge>
// 					</IconButton>
// 					<IconButton
// 						color="inherit"
// 						aria-label="Save"
// 						className={classes.icons}
// 						style={{ outline: "none" }}
// 					>
// 						<PermIdentityIcon style={{ fontSize: "20px" }} />
// 					</IconButton>
// 					<IconButton
// 						color="inherit"
// 						aria-label="More Options"
// 						className={classes.icons}
// 						style={{ outline: "none" }}
// 					>
// 						<MenuIcon style={{ fontSize: "20px" }} />
// 					</IconButton>
// 				</section>
// 			</Toolbar>
// 		</AppBar>
// 	);
// }

// // Demo.propTypes = {
// // 	classes: PropTypes.object.isRequired,
// // };
