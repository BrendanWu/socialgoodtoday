import React, { useState, useEffect } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Input,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  ButtonBase,
  makeStyles,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import FlexDiv from "../design-system/FlexDiv";
import {
  handleDonationAmount,
  removeFromCart,
  toggleDrawer,
} from "../../actions/cart";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import Register from "../../components/auth/Register";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://api.socialgoodtoday.org"
    : "http://localhost:5555";

function Checkout({
  isAuthenticated,
  user,
  cartItems,
  handleDonationAmount,
  removeFromCart,
  toggleDrawer,
}) {
  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    console.log(isAuthenticated);
    console.log(cartItems);
    console.log(user);
    const donationsArray = cartItems.map((a) => parseInt(a.amount));
    const total = donationsArray.reduce(
      (totalAmount, itemAmount) => totalAmount + itemAmount,
      0
    );
    console.log(total);
    setTotalDonationAmount(total);
  });

  const [donation, setDonation] = useState(5);
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setDonation(e.target.value);
  };

  const handleAmount = (e, index) => {
    const amount = e.target.value;
    handleDonationAmount(index, amount);
  };

  // const stripePromise = loadStripe("pk_test_JEBQUnSNjHYgECD1MQ28XFba00xAihSHKP");

  const handleSubmit = async (event, override) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    setLoading(true)
    event.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      setLoading(false)
      return;
    }

    if (override || isAuthenticated) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: "JWT fefege...",
      };
      let b = {
        donation: totalDonationAmount,
        cart: cartItems
      };
      if(user) {
        b.uid = user.id;
        b.name = user.name;
        b.email = user.email;
        b.avatar = user.avatar
      } 
      const data = await axios.post(`${BASE_URL}/api/payments/payForCart`, b, {
        headers,
      });
      const secret = data.data.client_secret;
  
      const result = await stripe.confirmCardPayment(secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            // name: state.currentUser.name,
            // email: state.currentUser.email
          },
        },
      });
  
      if (result.error) {
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
      } else {
        // The payment has been processed!
        console.log("SUCCESS");
        if (result.paymentIntent.status === "succeeded") {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          toggleDrawer();
          handleClose();
          history.push("/success");
        }
      }
    } else {
      handleClickOpen();
      console.log("not authenticated submission");
      setLoading(false)
      return;
    }
    setLoading(false)

    
  };
  return (
    <div
      style={{ width: "600px", padding: 20, marginTop: 50, marginBottom: 100 }}
    >

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              One last step
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Donate anonymously
            </Button>
          </Toolbar>
        </AppBar>
        <div className="container">
          <h2>One last step</h2>
          <h2>
            You are currently donating anonymously. By creating an account you
            will be able to track your donations and their impact, download
            donation receipts, and much more.
          </h2>
        </div>

        <List>
          <Register />

          <ListItem>
            <ListItemText primary={`Total $${totalDonationAmount}`} />
          </ListItem>

          <Divider />
          <ListItem button onClick={(e)=>{
            handleSubmit(e, true)
          }}>
            <ListItemText
              primary="I WANT TO DONATE ANONYMOUSLY"
              secondary="I will not be able to change"
            />
          </ListItem>
        </List>
      </Dialog>
      {user && (
              <FlexDiv justify="flex-end">
        <img src={user.avatar} style={{ width: 30, height: 30 }} />
        <p style={{ marginLeft: 16 }}>Logged in as : {user.email}</p>
      </FlexDiv>
      )}


      <h2 style={{marginTop:0}}>Your donation cart</h2>
      <FlexDiv vert>
        {cartItems.map((item, index) => {
          return (
            <FlexDiv vert>
              <FlexDiv justify="flex-end">
                <ButtonBase
                  onClick={() => {
                    removeFromCart(index);
                  }}
                >
                  Remove from cart
                </ButtonBase>
              </FlexDiv>

              <div>
                <img src={item.image} style={{ width: "100%" }} />
              </div>
              <FlexDiv
                justify="space-between"
                style={{ marginTop: 20, marginBottom: 20 }}
              >
                <div style={{ alignSelf: "center" }}>
                  <h4>{item.title}</h4>
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
                      id="outlined-adornment-amount"
                      value={item.amount}
                      type="number"
                      onChange={(e) => {
                        handleAmount(e, index);
                      }}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      labelWidth={60}
                    />
                  </FormControl>
                </div>
              </FlexDiv>
            </FlexDiv>
          );
        })}
      </FlexDiv>
      <h2>Total Donations : <span style={{color: "#79ccab"}}>${totalDonationAmount}</span></h2>

      <p>Pay with credit card</p>

      <div style={{ width: "95%" }}>
        <CardElement />
      </div>
        {loading && (<CircularProgress/>)}
      <button
        className="btn btn-primary btn-hover-orange py-3"
        onClick={(e)=>{handleSubmit(e, false)}}
        style={{ float: "right", marginTop: 10 }}
        color="primary"
        variant="contained"
        disabled={loading}
      >
        DONATE NOW
      </button>
    </div>
  );
}

Checkout.propTypes = {
  isAuthenticated: PropTypes.bool,
  toggleDrawer: PropTypes.func,
  handleDonationAmount: PropTypes.func,
  removeFromCart: PropTypes.func,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cartItems: state.cart.items,
  user: state.auth.user,
});

export default connect(mapStateToProps, {
  toggleDrawer,
  handleDonationAmount,
  removeFromCart,
})(Checkout);
