import image from "../images/beauty.jpg";
import two from "../images/Headphones.jpg";
import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import Grid from "@material-ui/core/Grid";
import { Paper, Divider } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		//	height: 100,
		marginTop: 10,
		marginBottom: 10,
	},
	details: {
		display: "flex",
		flexDirection: "column",
		marginLeft: 20,
		//border: "1px solid black",
		width: 350,
	},
	content: {
		flex: "1 0 auto",
	},
	cover: {
		width: 100,
		height: 100,
	},
	controls: {
		display: "flex",
		alignItems: "center",
		paddingLeft: theme.spacing(1),
		paddingBottom: theme.spacing(1),
	},
	playIcon: {
		// height: 38,
		// width: 38,
	},
	pricetyp: {
		fontWeight: "600",
		color: "#FA4242",
		fontSize: "14px",
	},
	title: {
		fontSize: 15,
		fontWeight: "600",
		// width: 20,
		//maxWidth: 20,
	},
	qty: {
		fontSize: 14,
		fontWeight: "100",
	},
}));

export default function MediaControlCard() {
	const classes = useStyles();
	const theme = useTheme();

	return (
		<div>
			<h1> Your Cart</h1>

			<Divider />
			<Card className={classes.root} elevation={0}>
				<CardMedia
					className={classes.cover}
					image={image}
					title="Live from space album cover"
				/>
				<div className={classes.details}>
					<CardContent className={classes.content}>
						<Grid container direction="row" spacing={0}>
							<Grid item xs={6}>
								<Typography className={classes.title} component="p">
									<span> ROLEX WATCH </span>
									{/* Rolex Watch */}
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<div style={{ textAlign: "right" }}>
									<IconButton
										aria-label="play/pause"
										style={{ outline: "none" }}
									>
										<ClearIcon className={classes.playIcon} />
									</IconButton>
								</div>
							</Grid>
							<Grid item xs={6}>
								<Typography component="p" className={classes.pricetyp}>
									$400
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography
									className={classes.title}
									color="textSecondary"
									className={classes.qty}
								>
									Qty 1
								</Typography>
							</Grid>
						</Grid>
					</CardContent>
					{/* 0 */}
				</div>
			</Card>
			<Divider />
		</div>
	);
}

// import React from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Card from "@material-ui/core/Card";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
// import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
// import PlayArrowIcon from "@material-ui/icons/PlayArrow";
// import SkipNextIcon from "@material-ui/icons/SkipNext";
// import image from "../images/beauty.jpg";
// import two from "../images/Headphones.jpg";
// import ClearIcon from "@material-ui/icons/Clear";

// import Grid from "@material-ui/core/Grid";
// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		display: "flex",
// 	},
// 	details: {
// 		display: "flex",
// 		flexDirection: "column",
// 	},
// 	content: {
// 		flex: "1 0 auto",
// 	},
// 	cover: {
// 		width: 151,
// 	},
// 	controls: {
// 		display: "flex",
// 		alignItems: "center",
// 		paddingLeft: theme.spacing(1),
// 		paddingBottom: theme.spacing(1),
// 	},
// 	playIcon: {
// 		// height: 38,
// 		// width: 38,
// 	},

// 	pricetyp: {
// 		fontWeight: "600",
// 		color: "#FA4242",
// 		fontSize: "18px",
// 	},
// 	title: {
// 		fontSize: 13,
// 		fontWeight: "600",
// 		//width: 20,
// 		//maxWidth: 20,
// 	},
// 	qty: {
// 		fontSize: 15,
// 		fontWeight: "100",
// 	},
// }));

// export default function MediaControlCard() {
// 	const classes = useStyles();
// 	const theme = useTheme();

// 	return (
// 		<Card className={classes.root}>
// 			<CardMedia
// 				className={classes.cover}
// 				image={image}
// 				title="Live from space album cover"
// 			/>
// 			<div className={classes.details}>
// 				<CardContent className={classes.content}>
// 					{/* <Typography component="h5" variant="h5">
// 						Live From Space
// 					</Typography> */}
// 					<Typography className={classes.title} component="p">
// 						ROLEX WATCH
// 					</Typography>{" "}
// 					{/* <ClearIcon className={classes.playIcon} /> */}
// 					{/* <Grid container direction="row" spacing={0}>
// 						<Grid item sm={6}> */}
// 					<div style={{ textAlign: "right", marginLeft: "350px" }}>
// 						<IconButton aria-label="play/pause" style={{ outline: "none" }}>
// 							<ClearIcon className={classes.playIcon} />
// 						</IconButton>
// 					</div>
// 					{/* </Grid>
// 					</Grid> */}
// 					<Grid container direction="row" spacing={0}>
// 						<Grid item xs={6}>
// 							<Typography component="p" className={classes.pricetyp}>
// 								$400
// 							</Typography>
// 						</Grid>
// 						<Grid item xs={6}>
// 							<Typography
// 								className={classes.title}
// 								color="textSecondary"
// 								className={classes.qty}
// 							>
// 								Qty:1
// 							</Typography>
// 						</Grid>
// 					</Grid>
// 				</CardContent>
// 				{/* <div className={classes.controls}>
// 					<IconButton aria-label="previous">
// 						{theme.direction === "rtl" ? (
// 							<SkipNextIcon />
// 						) : (
// 							<SkipPreviousIcon />
// 						)}
// 					</IconButton>
// 					<IconButton aria-label="play/pause">
// 						<PlayArrowIcon className={classes.playIcon} />
// 					</IconButton>
// 					<IconButton aria-label="next">
// 						{theme.direction === "rtl" ? (
// 							<SkipPreviousIcon />
// 						) : (
// 							<SkipNextIcon />
// 						)}
// 					</IconButton>
// 				</div> */}
// 			</div>
// 		</Card>
// 	);
// }
