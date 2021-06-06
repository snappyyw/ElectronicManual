import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Questions4({ getValue }) {
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
          Что относится к функциям Java-компилятора (утилиты javac из комплекта
          JDK)?
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
          label="JIT-компиляция байт-кода перед стартом Java-программы"
        />
        <FormControlLabel
          value="2"
          control={<Radio />}
          label="Компиляция кроссплатформенного байт-кода в машинный код для целевой платформы"
        />
        <FormControlLabel
          value="3"
          control={<Radio />}
          label="Компиляция кода на Java в кроссплатформенный байт-код"
        />
        <FormControlLabel
          value="4"
          control={<Radio />}
          label="JIT-компиляция и оптимизация байт-кода во время выполнения Java-программы в виртуальной Java-машине (JVM)"
        />
      </RadioGroup>
    </FormControl>
  );
}
