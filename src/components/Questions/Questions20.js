import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions20({ getValue }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event) => {
    if (event.target.value == 1) {
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
          Что означает ключевое слово extends?
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
          label="Что данный класс наследуется от другого."
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Что это дополнительный модуль класса, который расширяет его свойства."
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="Что два класса делают одно и то же."
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label="Что это самый большой класс в программе."
        />
      </RadioGroup>
    </FormControl>
  );
}
