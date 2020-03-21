import { Form as FormikForm, Formik, FormikProps } from 'formik'
import React, { useCallback, useState } from 'react'
import { makeStyles, Button, Stepper, StepLabel, Step } from '@material-ui/core'
import { Step01, Step02, StepName, StepProps } from '~/components/Form/steps'

export interface FormValues {
  fever: boolean
  longFever: boolean
  breathing: boolean
  cough: boolean
  age: boolean
}

const initialValues = {
  fever: false,
  longFever: false,
  breathing: false,
  cough: false,
  age: false,
}

const stepMap: {
  [stepName in StepName]: {
    label: string
    component: React.ComponentType<StepProps>
  }
} = {
  [StepName.Step01]: { label: 'Symptomy', component: Step01 },
  [StepName.Step02]: { label: 'Vyhodnocení', component: Step02 },
}

const steps = [StepName.Step01, StepName.Step02]

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}))

export const Form: React.FC = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(steps[0])
  const handleNext = useCallback(() => {
    setActiveStep(activeStep + 1)
  }, [])

  const ActiveStep = stepMap[activeStep].component

  return (
    <>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((step, i) => (
          <Step key={i}>
            <StepLabel>{stepMap[step].label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Formik<FormValues>
        initialValues={initialValues}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {formikProps => {
          return (
            <FormikForm>
              <ActiveStep {...formikProps} />
              <div className={classes.buttons}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  Next
                </Button>
              </div>
            </FormikForm>
          )
        }}
      </Formik>
    </>
  )
}
