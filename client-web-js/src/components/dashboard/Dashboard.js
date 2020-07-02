import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import FlexDiv from "../design-system/FlexDiv";
import Axios from "axios";
import { BASE_URL } from "../../utils/api";
import moment from "moment";
import { Avatar } from "@material-ui/core";

const Dashboard = ({ auth: { user } }) => {
  const [donations, setDonations] = useState();
  const [totalDonated, setTotalDonated] = useState(0);
  useEffect(() => {
    Axios.get(BASE_URL + "/api/donations/" + user.email).then((res) => {
      if (res.data.success) {
        const ds = res.data.donations;
        setDonations(ds.reverse());
        const donationsArray = ds.map((d) => parseInt(d.amount));
        const total = donationsArray.reduce(
          (totalAmount, itemAmount) => totalAmount + itemAmount,
          0
        );
        setTotalDonated(total);
      }
    });
  }, []);

  return (
    <Fragment>
      <FlexDiv
        vert
        style={{
          background:
            "url('https://www.ci.larkspur.ca.us/ImageRepository/Document?documentId=11186')",
          height: 300,
        }}
      >
        <FlexDiv justify="center" align="center" vert className="card">
{user && (

          <Avatar src={user.avatar}/>
)}
          <h1 className="large" style={{ background: "white", padding: 36 }}>
            Thank you {user && user.name}
          </h1>
        </FlexDiv>
      </FlexDiv>
      <div>
        <div className="site-section fund-raisers">
          <div className="container">
            <div className="card">
              <div className="card-body">
                <div className="row align-items-center">
                  <div className="col">
                    {/* Title */}
                    <h6 className="text-uppercase text-muted mb-2">
                      Total donated
                    </h6>
                    {/* Heading */}
                    <span className="h2 mb-0">${totalDonated}</span>
                    {/* Badge */}
                    <span className="badge badge-soft-success mt-n1">
                      {donations && donations.length}
                    </span>
                  </div>
                  <div className="col-auto">
                    {/* Icon */}
                    <span className="h2 fe fe-dollar-sign text-muted mb-0" />
                  </div>
                </div>{" "}
                {/* / .row */}
              </div>
            </div>
            <div className="row">
              {donations &&
                donations.map((donation) => {
                  return (
                    <div className="col-md-6 col-lg-3 mb-5">
                      <div className="person-donate text-center bg-light pt-4">
                        <FlexDiv justify="center">
                          <img
                            src={donation.image}
                            style={{ borderRadius: 0, height: 50 }}
                          />
                        </FlexDiv>

                        <div className="donate-info">
                          <h2>{donation.title}</h2>
                          <span className="time d-block mb-3">
                            {moment(donation.date).format("MMMM YY HH:mm:ss")}
                          </span>
                          <div className="donate-amount d-flex">
                            <div className="label">Donated</div>
                            <div className="amount">${donation.amount}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Dashboard);
