import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions11({ getValue }) {
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
          В чем отличие оператора == и метода equals()?
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
          label="Оператор == и метод equals выполняют аналогичные действия"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Оператор == сравнивает ссылки объектов, тогда как equals() сравнивает содержимое объектов, если данный метод был переопределен корректно"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="Метод equals() это thread-safe вариант операции =="
        />
      </RadioGroup>
    </FormControl>
  );
}
