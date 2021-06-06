import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions15({ getValue }) {
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
          Что означает модификатор Static у поля класса?
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
          label="Данное поле будет сохранено в памяти после удаления объекта"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Данное поле будет доступно только для чтения"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="Данное поле принадлежит классу, а не его экземпляру"
        />
      </RadioGroup>
    </FormControl>
  );
}
