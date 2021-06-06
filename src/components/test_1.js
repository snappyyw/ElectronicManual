import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Questions1, Questions2, Questions3, Questions4, Questions5 } from "./";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Первый вопрос",
    "Второй вопрос",
    "Третий вопрос",
    "Четвертый вопрос",
    "Пятый вопрос",
  ];
}

export default function Test_1() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [value1, setValue1] = React.useState(0);
  const [value2, setValue2] = React.useState(0);
  const [value3, setValue3] = React.useState(0);
  const [value4, setValue4] = React.useState(0);
  const [value5, setValue5] = React.useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              <p style={{ textAlign: "center" }}>
                {value1 + value2 + value3 + value4 + value5 + " из 5"}
              </p>
            </Typography>
            <Button onClick={handleReset}>Заново</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>
              {activeStep === 0 && <Questions1 getValue={setValue1} />}
              {activeStep === 1 && <Questions2 getValue={setValue2} />}
              {activeStep === 2 && <Questions3 getValue={setValue3} />}
              {activeStep === 3 && <Questions4 getValue={setValue4} />}
              {activeStep === 4 && <Questions5 getValue={setValue5} />}
            </Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Назад
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Завершить" : "Дальше"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
