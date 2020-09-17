import React from "react";
//import all req directories
//import { Link } from "react-router-dom";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Badge from "@material-ui/core/Badge";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

//import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
//import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PhotoGrid from "../components/PhotoGrid";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
//ui design for buutons
	root: {
		//display: "flex",
	},
	// This group of buttons will be aligned to the right
	rightToolbar: {
		marginLeft: "auto",
		marginRight: -12,
	},
	typ: {
		marginLeft: "auto",
		marginRight: "auto",
	},

	appBarBg: {
		backgroundColor: "#222F3E",

		//height: "90px",
	},
	menuButton: {
		height: "90px",
		marginRight: "auto",
	},
	search: {
		position: "relative",
		borderRadius: 20,
		border: "1px solid white",
		backgroundColor: "#222F3E",
		"&:hover": {
			backgroundColor: "#222F3E",
		},
		marginRight: theme.spacing(2),
		marginLeft: 30,
		width: "50%",
		[theme.breakpoints.up("sm")]: {
			marginLeft: theme.spacing(3),
			width: "50%",
			//marginTop: "30px",
		},
	},
	searchIcon: {
		padding: theme.spacing(0, 2),
		height: "100%",
		position: "absolute",
		pointerEvents: "none",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		//marginLeft: "90%",
		background: "white",
		borderTopLeftRadius: 20,
		borderBottomLeftRadius: 20,
		color: "#222F3E",
		border: "1px solid white",
	},
	inputRoot: {
		color: "inherit",
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 0),
		//vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
		transition: theme.transitions.create("width"),
		width: "100%",
		[theme.breakpoints.up("md")]: {
			width: "100%",
		},
	},

	icons: {
		height: "90px",
		marginRight: "auto",
		[theme.breakpoints.up("md")]: {
			//marginLeft: theme.spacing(3),
			marginRight: 50,
		},
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		// width: `calc(100% - ${drawerWidth}px)`,
		// transition: theme.transitions.create(["margin", "width"], {
		// 	easing: theme.transitions.easing.easeOut,
		// 	duration: theme.transitions.duration.enteringScreen,
		// }),
		// marginRight: drawerWidth,
	},

	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: "flex-start",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginRight: -drawerWidth,
	},
	contentShift: {
		// transition: theme.transitions.create("margin", {
		// 	easing: theme.transitions.easing.easeOut,
		// 	duration: theme.transitions.duration.enteringScreen,
		// }),
		//marginRight: 0,
	},
}));

export default function Demo() {
	const classes = useStyles();
	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<CssBaseline />
			<AppBar
				position="sticky"
				className={clsx(classes.appBar, classes.appBarBg, {
					[classes.appBarShift]: open,
				})}
				elevation={0}
			>
				<Toolbar>
					{/* <IconButton
					className={classes.menuButton}
					aria-label="Menu"
					color="inherit"
				></IconButton> */}
					<Typography variant="title" color="inherit" className={classes.typ}>
						LOGO
					</Typography>
					<div className={classes.search}>
						<div className={classes.searchIcon}>
							<SearchIcon style={{ fontSize: "20px" }} />
						</div>
						<InputBase
							//placeholder="Search…"
							classes={{
								root: classes.inputRoot,
								input: classes.inputInput,
							}}
							inputProps={{ "aria-label": "search" }}
						/>
					</div>

					<section className={classes.rightToolbar}>
						<IconButton
							color="inherit"
							aria-label="Edit"
							className={classes.icons}
							style={{ outline: "none" }}
						>
							<Badge badgeContent={4} color="secondary">
								<ShoppingCartIcon style={{ fontSize: "20px" }} />
							</Badge>
						</IconButton>
						<IconButton
							color="inherit"
							aria-label="Save"
							className={classes.icons}
							style={{ outline: "none" }}
						>
							<PermIdentityIcon style={{ fontSize: "20px" }} />
						</IconButton>
						<IconButton
							color="inherit"
							aria-label="More Options"
							//className={classes.icons}

							onClick={handleDrawerOpen}
							className={clsx(open && classes.hide, classes.icons)}
							style={{ outline: "none" }}
						>
							<MenuIcon style={{ fontSize: "20px" }} />
						</IconButton>
					</section>
				</Toolbar>
			</AppBar>
			{/* Main Body goes here */}

			<PhotoGrid />
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="right"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					{["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{["All mail", "Trash", "Spam"].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</Drawer>
		</div>
	);
}
