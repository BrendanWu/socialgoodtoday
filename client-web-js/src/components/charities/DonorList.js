import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Checkbox from "@material-ui/core/Checkbox";
import Avatar from "@material-ui/core/Avatar";
import { Divider, Typography, LinearProgress, Box } from "@material-ui/core";
import Axios from "axios";
import { BASE_URL } from "../../utils/api";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxHeight: "400px",
    overflowY: "scroll",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CheckboxListSecondary(props) {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([1]);
  const [donations, setDonations] = React.useState([]);
  const [totalRaised, setTotalRaised] = useState();

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  function LinearProgressWithLabel(props) {
    return (
      <div style={{ width: "100%" }}>
        <Box display="flex" alignItems="center">
          <Box width="100%" mr={1}>
            <LinearProgress
              variant="determinate"
              {...props}
              color="primary"
              style={{ backgroundColor: "lightgray" }}
            />
          </Box>
          <Box minWidth={35}>
            <Typography variant="body2" color="textSecondary">{`${Math.round(
              props.value
            )}%`}</Typography>
          </Box>
        </Box>
      </div>
    );
  }

  LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };

  useEffect(() => {
    const cid = props.charity._id;
    console.log(cid);
    Axios.get(BASE_URL + "/api/donations/getById/" + cid).then((res) => {
      if (res.data.success) {
        const ds = res.data.donations;
        console.log(ds);
        setDonations(res.data.donations.reverse());
        const donationsArray = ds.map((d) => parseInt(d.amount));
        const total = donationsArray.reduce(
          (totalAmount, itemAmount) => totalAmount + itemAmount,
          0
        );
        setTotalRaised(total);
        console.log(res.data.donations);
      }
    });
  }, []);

  return (
    <div>
      <h2>
        {" "}
        {donations && (
          <p>
            ${totalRaised} raised of ${props.charity.goal}
          </p>
        )}
      </h2>
      {donations ? <p>By {donations.length} donors</p> : <p>Loading..</p>}
      <List dense className={classes.root}>
        {donations.map((donation) => {
          return (
            <ListItem key={donation._id} button>
              <ListItemAvatar>
                <Avatar alt={`Avatar`} src={donation.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={donation.name ? donation.name : "Anonymous"}
              />
              <ListItemSecondaryAction>
                <Typography style={{ fontWeight: "bold", color: "#79ccab" }}>
                  ${donation.amount}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
        <Divider />
      </List>
      <LinearProgressWithLabel
        value={(100 * totalRaised) / props.charity.goal}
      />
    </div>
  );
}
