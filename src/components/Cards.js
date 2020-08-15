import React from "react";
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
import image from "../images/beauty.jpg";
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
		height: 150,
	},
	typ: {
		//fontFamily: "Roboto",
		fontWeight: "500",
		fontSize: "18px",
		textAlign: "center",
	},
	// ct: {
	// 	marginLeft: 20,
	// 	marginRight: 20,
	// },
}));

export default function CenteredGrid() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="xl" className={classes.ct}>
				<Grid container spacing={2}>
					<Grid item xs={6} sm={3}>
						{" "}
						<Card className={classes.root1} elevation={0}>
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
						</Card>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>gg</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>gg</Paper>
					</Grid>
					<Grid item xs={6} sm={3}>
						<Paper className={classes.paper}>gg</Paper>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
