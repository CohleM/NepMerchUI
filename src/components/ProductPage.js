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
import { Paper, Divider, Button } from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import Container from "@material-ui/core/Container";
import Carousel from "react-material-ui-carousel";
import Rating from "@material-ui/lab/Rating";
import one from "../images/beauty.jpg";


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
		marginLeft: 10,
		// border: "1px solid black",
		// width: 250,
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
		height: 20,
		width: 20,
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
	root1: {
		flexGrow: 1,
		marginLeft: 40,
		marginRight: 40,
		[theme.breakpoints.up("lg")]: {
			marginLeft: 100,
			marginRight: 100,
		},
	},
	paper: {
		height: 500,
		width: "100%",
		border: "1px solid #D6C9C9",
		borderRaduis: "none",
	},
	title1: {
		fontSize: 15,
		fontWeight: "600",
		textAlign: "center",
		marginTop: "25px",
		marginBottom: "25px",
	},
	priceTitle: {
		fontSize: 24,
		fontWeight: "600",
		textAlign: "center",
		// marginTop: "25px",
		// marginBottom: "0px",
	},
	discountTitle: {
		fontSize: 14,
		fontWeight: "200",
		textAlign: "center",
		marginTop: "0",
		marginBottom: "25px",
	},
	discountTitle2: {
		fontSize: 14,
		fontWeight: "200",
		textAlign: "center",
		marginTop: "0px",
		marginBottom: "25px",
	},
	margin: {
		// margin: theme.spacing(1),
		color: "black",
		border: "1px solid #D6C9C9",
		borderRadius: 0,
		textAlign: "center",
	},
	img2: {
		width: "100%",
		height: "auto",
	},
	// cont: {
	// 	spacing: 5,
	// },
}));

export default function ProductPage() {
	const classes = useStyles();
	const theme = useTheme();
	var items = [
		{
			image: two,
			name: "Random Name #1",
			description: "Probably the most random thing you have ever seen!",
		},
		{
			image: two,
			name: "Random Name #2",
			description: "Hello World!",
		},
	];

	return (
		<div className={classes.root1}>
			<Container maxWidth="xl" className={classes.ct}>
				<div>
					<h1> Product Page </h1>
					<Grid container direction="row" spacing={2}>
						<Grid item xs={12} md={6}>
							<Carousel elevation={0}>
								{items.map((item, i) => (
									<Item key={i} item={item} />
								))}
							</Carousel>
						</Grid>
						<Grid item xs={12} md={6}>
							<Grid container direction="column" spacing={3} style={{}}>
								<Grid item xs={12}>
									<Paper elevation={0}>
										<Typography
											// className={classes.priceTitle}
											variant="h5"
											component="p"
											style={{ textAlign: "left", fontWeight: "700px" }}
										>
											<span>ROLEX WATCH </span>

											{/* Rolex Watch */}
										</Typography>
									</Paper>
								</Grid>

								<Grid item xs={12}>
									<Rating name="read-only" value={3} readOnly size="small" />
								</Grid>

								<Grid item xs={12}>
									<Paper elevation={0}>
										<Typography
											className={classes}
											component="p"
											style={{
												textAlign: "left",
												color: "#FA4242",
												fontWeight: "600",
											}}
										>
											<span>$10567 </span>

											{/* Rolex Watch */}
										</Typography>
									</Paper>
								</Grid>
								<Grid item xs={12}>
									<div style={{ textAlign: "left" }}>
										<Button
											variant="outlined"
											size="large"
											className={classes.margin}
											style={{ outline: "none" }}
										>
											ADD TO CART
										</Button>
									</div>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</div>
				<hr style={{ marginTop: "50px", marginBottom: "25px" }}></hr>
				<Typography variant="h6" component="p" style={{ textAlign: "left" }}>
					<span>PRODUCT DETAILS</span>

					{/* Rolex Watch */}
				</Typography>
				<div style={{ width: "100%", marginTop: "20px" }}>
					<Typography
						className={classes.discountTitle}
						component="p"
						style={{ textAlign: "left" }}
					>
						<span>
							100% genuine (The SELLER guarantees the authenticity of the
							product) Brand Series: Sonata Model Number : 77075PP04 For: Men
							Water Resistant : Yes 1 Year Manufacturer Warranty DIAL Movement :
							Quartz Display Type : Digital Case Thickness : 15.6mm Case Length
							: 52.5mm Case Width : 48mm BODY Case Material : Plastic Dial
							Color: Grey Strap Material : Plastic Case Shape: Round Strap
							Colour: Grey Closure :Buckle{" "}
						</span>

						{/* Rolex Watch */}
					</Typography>
				</div>
			</Container>
		</div>
	);
}

function Item(props) {
	const classes = useStyles();
	return (
		<Paper style={{ outline: "none" }} elevation={0}>
			<img src={props.item.image} className={classes.img2} />
			{/* <h2>{props.item.name}</h2>
			<p>{props.item.description}</p>

			<Button className="CheckButton">Check it out!</Button> */}
		</Paper>
	);
}
