import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions5({ getValue }) {
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
          Для чего используется оператор NEW?
        </p>
      </FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="1"
          control={<Radio />}
          label="Для создания новой переменной"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Для объявления нового класса."
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="Это антагонист оператора OLD."
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label="Для создания экземпляра класса."
        />
      </RadioGroup>
    </FormControl>
  );
}
