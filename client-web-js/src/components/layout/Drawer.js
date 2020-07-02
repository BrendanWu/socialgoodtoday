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
import FlexDiv from '../../components/design-system/FlexDiv'
import { ButtonBase } from "@material-ui/core";

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
    <div style={{width:"100%"}}>

        <SwipeableDrawer
          anchor={"right"}
          open={isOpen}
          onClose={toggleDrawer}
          onOpen={toggleDrawer}
        
        >
          <div style={{minWidth:500, maxWidth:"100%"}}>
            <ButtonBase onClick={toggleDrawer} style={{marginRight:20, marginTop:20, float:"right"}}>Close</ButtonBase>
       
          <Checkout />

          </div>
          
        </SwipeableDrawer>
      
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