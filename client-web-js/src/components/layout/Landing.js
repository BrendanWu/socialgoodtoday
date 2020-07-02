import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Checkout from '../payment/Checkout';
import Drawer from './Drawer'
import Test from './Test';
import useScript from '../../utils/useScript';
import {toggleDrawer} from '../../actions/cart'
import CharityCards from '../charities/CharityCards';

import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import LatestDonations from './LatestDonations';
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const Landing = ({ isAuthenticated, toggleDrawer }) => {
  useScript("https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js")
    useScript("https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js")


  
    return (
      <div>


        {/* END nav */}
  
        <div className="block-31" style={{position: 'relative', marginTop:-96}}>
         
            <div className="block-30" style={{backgroundImage: 'url("https://images.squarespace-cdn.com/content/v1/5ba91272aadd3421761168c4/1552354756785-FU4NPV8RN3HHBKZ74B57/ke17ZwdGBToddI8pDm48kIcdTYxh5a0geLlYKN11Olh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1Ucp5CxczMxkNODU6E2tIVzGXW1WaegKOvbf_uoa8qPu7J14ubcdsY0uKwK2_j53OFw/Voluteer-group-of-people-for-charity-donation-in-the-park-668214842_2122x1416.jpeg?format=2500w")'}}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <h2 className="heading">Spare change for social good. Donate today</h2>
                  
                  </div>
              
              </div>
            </div>
          </div>
        </div>
        <div className="site-section">
          <div className="container">
          <h3 style={{marginBottom:48}}>100% of all proceeds go to our charities.</h3>
            <div className="row">
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon"><span className="flaticon-first-aid-kit" /></div>
                  <div className="media-body">
                    <h3 className="heading">Reinvesting in our local communities</h3>
                    <p>Making change in Toronto and the GTA.</p>
                    <p><a href="#">Learn More</a></p>
                  </div>
                </div>     
              </div>
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon"><span className="flaticon-donate" /></div>
                  <div className="media-body">
                    <h3 className="heading">We need Donations</h3>
                    <p>Full transparency and record of impact.</p>
                    <p><a href="#">Learn More</a></p>
                  </div>
                </div>  
              </div>
              <div className="col-md-4">
                <div className="media block-6">
                  <div className="icon"><span className="flaticon-people" /></div>
                  <div className="media-body">
                    <h3 className="heading">We Need Volunteers</h3>
                    <p>Through unity and community support we can affect real change.</p>
                    <p><a href="#">Learn More</a></p>
                  </div>
                </div> 
              </div>
            </div>
          </div>
        </div> {/* .site-section */}

      
        <div className="site-section fund-raiser" style={{}}>
          <div className="container-fluid" style={{width:"80%"}}>
            <div className="row mb-5">
              <div className="col-md-12">
                <h2 style={{color:"white"}}>Make a change today</h2>
              </div>
            </div>
            <CharityCards/>
          </div>
        </div>
       <LatestDonations/>
       
      </div>
    )
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool,
  toggleDrawer: PropTypes.func
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, {toggleDrawer})(Landing);
