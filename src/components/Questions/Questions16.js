import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions16({ getValue }) {
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
          Модификатор protected указывает, что члены пакета могут быть доступны
          только внутри него?
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
          label="Библиотека для создания UML диаграмм на языке Java"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Протокол передачи данных в бинарном виде, а также сериализации данных"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="JUnit это фреймворк для юнит-тестирования на языке Java"
        />
      </RadioGroup>
    </FormControl>
  );
}
