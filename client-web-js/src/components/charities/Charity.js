import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import { BASE_URL } from "../../utils/api";
import { Carousel } from "react-responsive-carousel";
import {toggleDrawer} from '../../actions/cart'
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const Charity = ({toggleDrawer}) => {
  const [charity, setCharity] = useState();
  let location = useLocation();
  useEffect(() => {
    if (!charity) {
      const path = location.pathname;
      const cid = path.split("/")[2];
      console.log(cid);
      Axios.get(BASE_URL + "/api/charity/" + cid).then((res) => {
        if (res.data.success) {
          setCharity(res.data.charity);
          console.log(res);
        }
      });
    }
  });

  return (
    <div className="container">
      <div>
        {charity && (
          <Carousel>
            {charity.slideshowImages.map((image) => {
              return (
                <div>
                  <img src={image} style={{ width: "100%" }} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
      {charity && (
        <div>
          <h2>{charity.title}</h2>
          <h3>{charity.organization}</h3>
          <p>Goal: {charity.goal}</p>
          <p>Amount raised: {charity.amountRaised}</p>
          <p>{charity.description}</p>
        </div>
      )}
    </div>
  );
};


Charity.propTypes = {
  isAuthenticated: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {toggleDrawer})(Charity);
