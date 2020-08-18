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
		marginLeft: 20,
		marginRight: 20,
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
		fontSize: 14,
		fontWeight: "200",
		textAlign: "center",
		marginTop: "25px",
		marginBottom: "0px",
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
		margin: theme.spacing(1),
		color: "black",
		border: "1px solid #D6C9C9",
		borderRadius: 0,
		textAlign: "center",
	},
	// cont: {
	// 	spacing: 5,
	// },
}));

export default function MediaControlCard() {
	const classes = useStyles();
	const theme = useTheme();

	var Items = [
		{
			image: image,
			title: "BEAUTYaaaaaaaaaaaaaa",
			price: 400,
			quantity: 1,
		},
		{
			image: image,
			title: "BEAUTY",
			price: 400,
			quantity: 1,
		},
		{
			image: image,
			title: "Manish",
			price: 400,
			quantity: 2,
		},
		{
			image: image,
			title: "BEAUTbbbbbbbbbbbbbY",
			price: 400,
			quantity: 5,
		},
		{
			image: image,
			title: "BEAUTY",
			price: 400,
			quantity: 71,
		},
		{
			image: image,
			title: "BEAUTY",
			price: 400,
			quantity: 9,
		},
	];

	return (
		<div className={classes.root1}>
			<Container maxWidth="xl" className={classes.ct}>
				<div>
					<h1> Your Cart</h1>
					<Grid container direction="row" spacing={10}>
						<Grid item xs={12} md={6}>
							{Items.map((item, i) => (
								<div key={i}>
									{" "}
									{/* <Divider style={{ border: "1px solid #D6C9C9" }} /> */}
									<hr></hr>
									<Card className={classes.root} elevation={0}>
										<CardMedia
											className={classes.cover}
											image={image}
											title="cart"
										/>
										<div className={classes.details}>
											<CardContent className={classes.content}>
												<Grid container direction="row" spacing={4}>
													<Grid item xs={12}>
														<Typography className={classes.title} component="p">
															<span> {item.title} </span>
															{/* Rolex Watch */}
														</Typography>
													</Grid>
												</Grid>
												<Grid
													container
													direction="row"
													spacing={5}
													className={classes.cont}
												>
													<Grid item xs={4}>
														<Typography
															component="p"
															className={classes.pricetyp}
														>
															${item.price}
														</Typography>
													</Grid>
													<Grid item xs={4}>
														<Typography
															className={classes.title}
															color="textSecondary"
															className={classes.qty}
														>
															Qty {item.quantity}
														</Typography>
													</Grid>
													<Grid item xs={4}>
														{/* <Button
															className={classes.title}
															color="textSecondary"
															className={classes.qty}
														>
															Remove
														</Button> */}
														<Button
															size="small"
															// className={classes.qty}
															color="textSecondary"
															style={{ outline: "none" }}
														>
															Remove
														</Button>
													</Grid>
												</Grid>
											</CardContent>
											{/* 0 */}
										</div>
									</Card>
								</div>
							))}
						</Grid>
						<Grid item xs={12} md={6}>
							<Paper
								variant="outlined"
								className={classes.paper}
								style={{
									borderRadius: "0px",
									paddingLeft: "25px",
									paddingRight: "25px",
								}}
							>
								<Typography className={classes.title1} component="p" style={{}}>
									<span> TOTAL </span>

									{/* Rolex Watch */}
								</Typography>
								<hr></hr>
								<Grid container direction="row" spacing={4} style={{}}>
									<Grid item xs={6}>
										<Paper elevation={0}>
											<Typography
												className={classes.priceTitle}
												component="p"
												style={{ textAlign: "left" }}
											>
												<span>SUB-TOTAL </span>

												{/* Rolex Watch */}
											</Typography>
										</Paper>
									</Grid>
									<Grid item xs={6}>
										<Paper elevation={0}>
											<Typography
												className={classes.priceTitle}
												component="p"
												style={{ textAlign: "right" }}
											>
												<span>$10567 </span>

												{/* Rolex Watch */}
											</Typography>
										</Paper>
									</Grid>
									<Grid item xs={6}>
										<Paper elevation={0}>
											<Typography
												className={classes.discountTitle}
												component="p"
												style={{ textAlign: "left" }}
											>
												<span>DISCOUNT </span>

												{/* Rolex Watch */}
											</Typography>
										</Paper>
									</Grid>
									<Grid item xs={6}>
										<Paper elevation={0}>
											<Typography
												className={classes.discountTitle}
												component="p"
												style={{ textAlign: "right" }}
											>
												<span>-0</span>

												{/* Rolex Watch */}
											</Typography>
										</Paper>
									</Grid>
								</Grid>
								<hr></hr>
								<Grid container direction="row" spacing={4} style={{}}>
									<Grid item xs={6}>
										<Paper elevation={0}>
											<Typography
												className={classes.discountTitle2}
												component="p"
												style={{
													textAlign: "left",
												}}
											>
												<span>TOTAL </span>

												{/* Rolex Watch */}
											</Typography>
										</Paper>
									</Grid>
									<Grid item xs={6}>
										<Paper elevation={0}>
											<Typography
												className={classes.discountTitle2}
												component="p"
												style={{
													textAlign: "right",
												}}
											>
												<span>$10567</span>

												{/* Rolex Watch */}
											</Typography>
										</Paper>
									</Grid>
								</Grid>
								<div style={{ textAlign: "center" }}>
									<Button
										variant="outlined"
										size="large"
										className={classes.margin}
										style={{ outline: "none" }}
									>
										Checkout
									</Button>
								</div>
							</Paper>
						</Grid>
					</Grid>

					<Divider />
				</div>
			</Container>
		</div>
	);
}
