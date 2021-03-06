import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

import image from "../images/beauty.jpg";
import two from "../images/Headphones.jpg";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		marginLeft: 20,
		marginRight: 20,
		[theme.breakpoints.up("lg")]: {
			marginLeft: 100,
			marginRight: 100,
		},
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	root1: {
		maxWidth: 345,
		borderRadius: 0,
		border: "1px solid #D6C9C9",
	},
	media: {
		height: 100,
		[theme.breakpoints.up("sm")]: {
			height: 200,
		},
	},
	typ: {
		//fontFamily: "Roboto",
		fontWeight: "500",
		fontSize: "18px",
		textAlign: "center",
	},
	box: {
		marginTop: 20,
		textAlign: "center",
	},
	pricetyp: {
		fontWeight: "600",
		color: "#FA4242",
		fontSize: "18px",
	},
	// ct: {
	// 	marginLeft: 20,
	// 	marginRight: 20,
	// },
}));

export default function CenteredGrid() {
	const [value, setValue] = React.useState(2);
	const classes = useStyles();

	var Items = [
		{
			image: image,
			category: "BEAUTY",
			description: "2,153 items in this category",
			price: 200,
			rating: 1,
		},
		{
			image: two,
			category: "ELECTRONICS",
			description: "2,153 items in this category",
			price: 300,
			rating: 2,
		},
		{
			image: image,
			category: "BEAUTY",
			description: "2,153 items in this category",
			price: 500,
			rating: 3,
		},
		{
			image: two,
			category: "ELECTRONICS",
			description: "2,153 items in this category",
			price: 800,
			rating: 4,
		},
		{
			image: image,
			category: "BEAUTY",
			description: "2,153 items in this category",
			price: 1100,
			rating: 4,
		},
		{
			image: two,
			category: "ELECTRONICS",
			description: "2,153 items in this category",
			price: 2300,
			rating: 5,
		},
		{
			image: image,
			category: "BEAUTY",
			description: "2,153 items in this category",
			price: 1100,
			rating: 4,
		},
		{
			image: two,
			category: "ELECTRONICS",
			description: "2,153 items in this category",
			price: 2300,
			rating: 5,
		},
	];

	return (
		<div className={classes.root}>
			<Container maxWidth="xl" className={classes.ct}>
				<Grid container spacing={2}>
					{" "}
					{Items.map((item, i) => (
						<Grid item xs={6} sm={4} md={3} key={i}>
							<Card className={classes.root1} elevation={0}>
								<CardActionArea style={{ outline: "none" }}>
									<CardMedia
										className={classes.media}
										image={item.image}
										title="Contemplative Reptile"
									/>
									<CardContent>
										<Typography gutterBottom className={classes.typ}>
											{item.category}
										</Typography>
										{/* <Typography
											variant="body2"
											color="textSecondary"
											component="p"
											style={{ textAlign: "center" }}
										>
											{item.description}
										</Typography> */}
										<Box
											component="fieldset"
											mb={3}
											borderColor="transparent"
											className={classes.box}
										>
											<Rating
												name="read-only"
												value={item.rating}
												readOnly
												size="small"
											/>
											<Typography gutterBottom className={classes.pricetyp}>
												${item.price}
											</Typography>
										</Box>
									</CardContent>
								</CardActionArea>
								{/* <Box component="fieldset" mb={3} borderColor="transparent">
									<Typography component="legend">Read only</Typography>
									<Rating
										name="read-only"
										value={value}
										readOnly
										size="small"
									/>
								</Box> */}
								{/* <CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions> */}
							</Card>
						</Grid>
					))}
					{/* <Card className={classes.root1} elevation={0}>
							<CardActionArea style={{ outline: "none" }}>
								<CardMedia
									className={classes.media}
									image={image}
									title="Contemplative Reptile"
								/>
								<CardContent>
									<Typography gutterBottom className={classes.typ}>
										BEAUTY
									</Typography>
									<Typography
										variant="body2"
										color="textSecondary"
										component="p"
										style={{ textAlign: "center" }}
									>
										2,153 items in this category
									</Typography>
								</CardContent>
							</CardActionArea>
							{/* <CardActions>
								<Button size="small" color="primary">
									Share
								</Button>
								<Button size="small" color="primary">
									Learn More
								</Button>
							</CardActions> */}
					{/* </Card>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>gg</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>gg</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>gg</Paper>
					</Grid> */}{" "}
				</Grid>
				<Typography
					variant="h6"
					display="block"
					gutterBottom
					className={classes.typ}
					style={{
						marginTop: "70px",
						marginBottom: "70px",
						//textDecoration: "underline",
						//borderBottom: "1px",
					}}
				>
					<Button
						size="large"
						className={classes.margin}
						style={{ outline: "none" }}
					>
						LOAD MORE
					</Button>
				</Typography>
			</Container>
		</div>
	);
}
