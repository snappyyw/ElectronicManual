import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions12({ getValue }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    if (event.target.value == 4) {
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
          Какого ключевого слова не существует в языке Java?
        </p>
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="goto" />
        <FormControlLabel value="2" control={<Radio />} label="final" />
        <FormControlLabel value="3" control={<Radio />} label="volatile" />
        <FormControlLabel value="4" control={<Radio />} label="external" />
        <FormControlLabel value="5" control={<Radio />} label="static" />
      </RadioGroup>
    </FormControl>
  );
}
