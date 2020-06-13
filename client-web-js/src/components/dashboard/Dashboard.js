import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FlexDiv from '../design-system/FlexDiv';

const Dashboard = ({
  auth: { user }
}) => {
 
  return (
    <Fragment>

      <FlexDiv vert style={{background: "#ebebeb", height: 300}}>
        <FlexDiv justify="center" align="flex-end">
          <h1 className="large text-primary">DEVELOW CLOUD NETWORK</h1>
        </FlexDiv>
        <FlexDiv justify="center">
          <p className="lead">
            <i className="fas fa-user" /> Welcome {user && user.name}
          </p>
        </FlexDiv>
      </FlexDiv>

    </Fragment>
  );
};

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {  })(
  Dashboard
);
