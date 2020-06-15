import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Checkout from '../payment/Checkout';
import Drawer from './Drawer'
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

const Landing = ({ isAuthenticated }) => {
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.

  }
 
  function closeModal(){
    setIsOpen(false);
  }
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section style={{ marginTop: 100 }}>
      <h1>Socialgoodtoday</h1>
      <Drawer/>
      <div style={{ width: 300, background: "lightgray", float: "right" }}>
        <h3>Donate now</h3>
        <div style={{ display: "flex" }}>
          <input type="number" placeholder="Amount" style={{ width: "100%" }} />

        </div>
        <div style={{ display: "flex", marginTop: "1em" }}>
          <div style={{ flex: 1 }}>
            <button>Single donation</button>
          </div>
          <div style={{ flex: 1, alignItems: "flex-end" }}>
            <button>Monthly donation</button>
          </div>
        </div>
      </div>
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

         <Checkout/>
        </Modal>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
