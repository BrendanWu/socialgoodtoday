import React, { useState, useEffect } from "react";
import { Divider, Input, Card, Grid, Typography, Button } from "@material-ui/core";
import FlexDiv from "../../design-system/FlexDiv";
import { uploadImage, uploadVideo } from "../../../utils/s3-socialgoodtoday";
import { DropzoneArea } from "material-ui-dropzone";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { BASE_URL } from "../../../utils/api";
import CharityCards from "../../charities/CharityCards";

const AdminCharities = () => {
  const [bannerImage, setBannerImage] = useState("");
  const [bannerVideo, setBannerVideo] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [organization, setOrganization] = useState("");
  const [goal, setGoal] = useState(0);
  const [amountRaised, setAmountRaised] = useState(0);
  const [slideImages, setSlideImages] = useState([]);

  const handleImageDropZone = (files) => {
    uploadImage(files[0]).then((res) => {
      if (res) {
        if (res.status == 200) {
          const s3URL = res.body;
          setBannerImage(s3URL);
        }
      }
    });
  };
  const handleVideoDropZone = (files) => {
    uploadVideo(files[0]).then((res) => {
      if (res) {
        if (res.status == 200) {
          const s3URL = res.body;
          setBannerVideo(s3URL);
        }
      }
    });
  };
  const handleSlideImagesDropzone = (files) => {
    uploadImage(files[0]).then((res) => {
      if (res) {
        if (res.status == 200) {
          const s3URL = res.body;
          setSlideImages([...slideImages, s3URL]);
        }
      }
    });
  };

  const handleSubmitCharity = async () => {
      const charity = {
          title,
          description,
          organization,
          goal,
          amountRaised,
          bannerImage,
          bannerVideo,
          slideshowImages: slideImages
      }
      try {
          console.log(charity)
        const c = await axios.post(BASE_URL+"/api/charity", charity)
        console.log(c)
      } catch (error) {
          throw error
      }
     
  }
  useEffect(()=> {
      console.log(title, description, organization, goal, amountRaised)
  })
  return (
    <div className="container">
      <h1>Admin Charities</h1>
      <CharityCards/>
      <Divider />
      <Card style={{ padding: 40 }}>
        <h3>Create a charity</h3>
        <FlexDiv vert>
          <Input
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setTitle(val);
            }}
            placeholder="Title"
          />
          <Input
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setOrganization(val);
            }}
            placeholder="Organization"
          />
          <Input
            type="text"
            onChange={(e) => {
              const val = e.target.value;
              setDescription(val);
            }}
            multiline
            rows="5"
            placeholder="Description"
          />
          <Input
            type="number"
            onChange={(e) => {
              const val = e.target.value;
              setGoal(val);
            }}
            placeholder="Goal"
          />
          <Input
            type="number"
            onChange={(e) => {
              const val = e.target.value;
              setAmountRaised(val);
            }}
            placeholder="Amount raised"
          />
          <Grid container>
            <Grid item xs={6} style={{ padding: 30 }}>
              <p>Banner image</p>
            </Grid>
            <Grid item xs={6} style={{ padding: 30 }}></Grid>
            <Grid item xs={6} alignContent="center">
              <DropzoneArea
                //4gb
                maxFileSize={4294967296}
                acceptedFiles={["image/*"]}
                onChange={(files) => {
                  handleImageDropZone(files);
                }}
                showPreviews={true}
                showFileNames={true}
                showFileNamesInPreview={true}
                showPreviewsInDropzone={false}
                filesLimit={1}
              />
            </Grid>
            <Grid item xs={6} alignContent="center">
              {bannerImage && (
                <img src={bannerImage} style={{ width: "100%" }} />
              )}
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6} style={{ padding: 30 }}>
              <p>Banner video</p>
            </Grid>
            <Grid item xs={6} style={{ padding: 30 }}></Grid>
            <Grid item xs={6} alignContent="center">
              <DropzoneArea
                //4gb
                maxFileSize={4294967296}
                acceptedFiles={["video/*"]}
                onChange={(files) => {
                  handleVideoDropZone(files);
                }}
                showPreviews={true}
                showFileNames={true}
                showFileNamesInPreview={true}
                showPreviewsInDropzone={false}
                filesLimit={1}
              />
            </Grid>
            <Grid item xs={6} style={{ padding: 20, paddingTop: 0 }}>
              {bannerVideo && (
                <video
                  controls
                  src={bannerVideo}
                  style={{ width: "100%", marginBottom: "1em" }}
                ></video>
              )}
            </Grid>
          </Grid>
          <FlexDiv vert>
            <p>Slideshow images</p>
            <FlexDiv container justify="space-between">
              <Carousel>
                {slideImages.map((image) => {
                  return (
                    <div>
                      <img src={image} style={{ width: "100%" }} />
                    </div>
                  );
                })}
              </Carousel>
            </FlexDiv>
            <FlexDiv>
              <DropzoneArea
                //4gb
                maxFileSize={4294967296}
                acceptedFiles={["image/*"]}
                onChange={(files) => {
                  handleSlideImagesDropzone(files);
                }}
                showPreviews={true}
                showFileNames={true}
                showFileNamesInPreview={true}
                showPreviewsInDropzone={false}
                filesLimit={1}
              />
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </Card>
      <Button variant="contained" color="primary"  onClick={handleSubmitCharity}>
      Submit charity
</Button>
    </div>
  );
};

export default AdminCharities;
