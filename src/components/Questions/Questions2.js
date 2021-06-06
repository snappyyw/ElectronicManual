import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions2({ getValue }) {
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
        <p style={{ textAlign: "center" }}>Что такое класс в Java?</p>
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
          label="Уровень сложности программы. Все операторы делятся на классы в зависимости от сложности их использования."
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Базовый элемент объектно-ориентированного программирования в языке Java."
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="Просто одно из возможных названий переменной."
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label="Такое понятие есть только в C++, в Java такого понятия нет."
        />
      </RadioGroup>
    </FormControl>
  );
}
