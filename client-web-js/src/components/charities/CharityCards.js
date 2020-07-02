import React, { useEffect, useState } from "react";
import {
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Card,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@material-ui/core";
import axios from "axios";
import { BASE_URL } from "../../utils/api";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Box from "@material-ui/core/Box";
import FlexDiv from "../design-system/FlexDiv";
import { useHistory } from "react-router-dom";
import DonorList from "./DonorList";
import { connect } from "react-redux";
import {toggleDrawer, addToCart, handleDonationAmount} from '../../actions/cart'


const CharityCards = ({toggleDrawer, addToCart}) => {
  const [charities, setCharities] = useState([]);
  const [donationCart, setDonationCart] = useState({})
  let history = useHistory();
  useEffect(() => {
    axios.get(BASE_URL + "/api/charity").then((res) => {
      if (res.data.success) {
        setCharities(res.data.charities);
      }
    });
  }, []);
  const goToCharity = (cid) => {
    history.push("/charities/" + cid);
  };

  const handleDonate = (charity) => {
    const amount = document.getElementById(charity._id).value;
    console.log(amount);
    addToCart(charity._id, amount, charity.title, charity.bannerImage)
    toggleDrawer()
  }

  const handleDonationAmount = (e, charity) => {
    const amount = e.target.value
    const cid = charity._id
    setDonationCart({...donationCart, [cid]: amount})
  }



  

  return (
    <Grid container >
      {charities.map((charity, i) => {
        return (
          <>
            <Grid xs={12} sm={6} md={8} style={{ padding: 20, paddingLeft:0 }}>
              <Typography gutterBottom variant="h2" component="h2" style={{fontFamily:"Gaegu"}}>
                {charity.title}
              </Typography>
              <div style={{ width: "100%", borderRadius:0 }}>
                <CardActionArea
                  onClick={() => {
                    goToCharity(charity._id);
                  }}
                >
                  <CardMedia
                    style={{ height: 400, overflow:"scroll" }}
                    image={charity.bannerImage}
                    title=""
                  />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {charity.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ padding: 20 }}>
                  <FlexDiv vert>
                 
                    <FlexDiv>
                     
                      <Button
                        size="small"
                        color="primary"
                        onClick={() => {
                          goToCharity(charity._id);
                        }}
                      >
                        Learn More
                      </Button>
                    </FlexDiv>
                    <FlexDiv>
                      <p>{charity._id}</p>
                    </FlexDiv>
                  </FlexDiv>
                </CardActions>
              </div>
            </Grid>
            <Grid xs={12} sm={6} md={4} style={{ padding: 20 }}>
              <Card style={{ height: "100%", padding: 20, borderRadius:0 }}>
                <FlexDiv
                  vert
                  justify="space-between"
                  align="space-between"
                  container
                  style={{ height: "100%" }}
                >
                  <div>
                   
                    <DonorList charity={charity}/>
                  </div>

                  <div>
                 

                    <FormControl
                      fullWidth
                      variant="outlined"
                      style={{ marginTop: 10, marginBottom: 10 }}
                    >
                      <InputLabel htmlFor="outlined-adornment-amount">
                        Amount
                      </InputLabel>
                      <OutlinedInput
                        id={charity._id}
                        defaultValue={10}
                     
                  
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                        labelWidth={60}
                      />
                    </FormControl>
                    <button
                      className="btn btn-primary btn-hover-orange py-3"
                      style={{ width: "100%" }}
                      onClick={()=>{handleDonate(charity)}}
                    >
                      Donate Now
                    </button>
                  </div>
                </FlexDiv>
              </Card>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};


const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

// function LinearWithValueLabel() {
//   const classes = useStyles();
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <div className={classes.root}>
//       <LinearProgressWithLabel value={progress} />
//     </div>
//   );
// }


CharityCards.propTypes = {
  isAuthenticated: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  addToCart: PropTypes.func
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {toggleDrawer, addToCart})(CharityCards);
