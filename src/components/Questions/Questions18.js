import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions18({ getValue }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    if (event.target.value == 3) {
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
          Какой модификатор объявляет что метод может быть использован только в
          своем классе?
        </p>
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="public" />
        <FormControlLabel value="2" control={<Radio />} label="local" />
        <FormControlLabel value="3" control={<Radio />} label="private" />
        <FormControlLabel value="4" control={<Radio />} label="static" />
        <FormControlLabel value="5" control={<Radio />} label="final" />
      </RadioGroup>
    </FormControl>
  );
}
