import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { DropzoneArea } from "material-ui-dropzone";
import FlexDiv from '../design-system/FlexDiv';
import {uploadImage} from '../../utils/s3-socialgoodtoday'

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const [profileImage, setProfileImage] = useState("")

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      console.log(profileImage);
      setAlert('Passwords do not match', 'danger');
    } else {
      console.log({...formData, profileImage});
      register({...formData, profileImage})
    }
  };

  const handleImageDropZone = (files) => {
    uploadImage(files[0]).then((res) => {
      if (res) {
        if (res.status == 200) {
          const s3URL = res.body;
          console.log(s3URL)
          console.log(s3URL.location);;
          setProfileImage(s3URL);
        }
      }
    });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <h1 style={{color:"black", marginTop:0}}>Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user" /> Create Your Account
      </p>
      <form className="form" onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={onChange}
          />
    
        </div>
        <p>Profile picture</p>
        <FlexDiv container>
          <FlexDiv>
            <DropzoneArea
                //4gb
                maxFileSize={4294967296}
                acceptedFiles={["image/*"]}
                onChange={(files) => {
                  handleImageDropZone(files);
                }}
                showPreviews={false}
                showFileNames={true}
                showFileNamesInPreview={false}
                showPreviewsInDropzone={false}
                filesLimit={1}

              />
          </FlexDiv>
          <FlexDiv justify="center" align="center">
            <div>
              {!profileImage && (
                <p>Please select an image..</p>
              )}
                          <img src={profileImage} style={{width:200}}/>

            </div>

          </FlexDiv>
        

        </FlexDiv>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={onChange}
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
