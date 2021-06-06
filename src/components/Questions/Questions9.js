import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions9({ getValue }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    if (event.target.value == 2) {
      getValue(1);
    } else {
      getValue(0);
    }
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">
        <p style={{ textAlign: "center" }}>
          Что выведет код?
          <br />
          int y = 1;
          <br />
          System.out.println(y++);
        </p>
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="0" />
        <FormControlLabel value="2" control={<Radio />} label="1" />
        <FormControlLabel value="3" control={<Radio />} label="2" />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label="Ничего не выведет"
        />
      </RadioGroup>
    </FormControl>
  );
}
