import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import SimpleSelect from "./Select";
import { Button, Card } from "@material-ui/core";
import { useState } from "react";
import axios from "axios";
// import moment from "moment";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BookingForm(props) {
  const classes = useStyles();
  const [startDate, setStart] = useState(new Date());
  const [endDate, setEnd] = useState(new Date());
  const [unit, setUnit] = useState(22003703);

  const Book = () => {
    axios
      .post("https://hst-api.atsuae.net/leaseplan/booking", {
        user: props.activeUser.id,
        unit: 1,
        time_start: startDate,
        time_end: endDate,
      })
      .then((results) => {
        console.log(results);
      });
  };

  return (
    <div>
      <Card>
        <Datetime onChange={setStart} value={startDate} />
        <Datetime onChange={setEnd} value={endDate} />
        <SimpleSelect
          onChange={setUnit}
          value={unit}
          className={classes.formControl}
        />
        <Button
          onClick={() => {
            Book();
          }}
          variant="contained"
          color="primary"
        >
          Book Unit
        </Button>
      </Card>
    </div>
  );
}
