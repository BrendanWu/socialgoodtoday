import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Checkout from "../payment/Checkout";
import { connect } from "react-redux";
import {toggleDrawer} from '../../actions/cart'
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  list: {
    width: 500,
  },
  fullList: {
    width: "auto",
  },
});

const SwipeableTemporaryDrawer = ({isOpen, toggleDrawer}) => {
  const classes = useStyles();


  return (
    <div>
      <React.Fragment>
        <Button onClick={toggleDrawer}>toggle drawer</Button>
        <SwipeableDrawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        >
          <h2>Donate now</h2>
          <Divider />
          <Checkout />
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

SwipeableTemporaryDrawer.propTypes = {
    isOpen: PropTypes.bool,
    toggleDrawer: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    isOpen: state.cart.isOpen
})

export default connect(mapStateToProps, {toggleDrawer})(SwipeableTemporaryDrawer)