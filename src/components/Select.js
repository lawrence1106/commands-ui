import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();
  const [wid, setWid] = React.useState("");

  const handleChange = (event) => {
    setWid(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="label-wid">Select Vehicle</InputLabel>
        <Select
          labelId="label-wid"
          id="select-wid"
          value={wid}
          onChange={handleChange}
        >
          <MenuItem value={22003703}>P12345</MenuItem>
          <MenuItem value={22003703}>P12345</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
