import {
  Button,
  CircularProgress,
  makeStyles,
  Step,
  StepLabel,
  Stepper,
} from '@material-ui/core'
import axios from 'axios'
import { Form as FormikForm, Formik } from 'formik'
import React, { useCallback, useState } from 'react'
import {
  Step01,
  Step02,
  Step03,
  StepName,
  StepProps,
} from '~/components/Form/steps'
import { getResultLevel, ResultLevel } from '~/utils/results'

export interface FormValues {
  fever: boolean
  longFever: boolean
  breathing: boolean
  cough: boolean
  old: boolean
  phone: string
}

const initialValues = {
  fever: false,
  longFever: false,
  breathing: false,
  cough: false,
  old: false,
  phone: '',
}

const stepMap: {
  [stepName in StepName]: {
    label: string
    component: React.ComponentType<StepProps>
  }
} = {
  [StepName.Step01]: { label: 'Triệu chứng', component: Step01 },
  [StepName.Step02]: { label: 'Kết quả', component: Step02 },
  [StepName.Step03]: { label: 'Sent', component: Step03 },
}

const steps = [StepName.Step01, StepName.Step02]

const useStyles = makeStyles(theme => ({
  buttons: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  stepper: {
    padding: theme.spacing(1, 0),
  },
  progressIcon: {
    position: 'absolute',
  },
}))

export const Form: React.FC = () => {
  const classes = useStyles()
  const [activeStep, setActiveStep] = useState(steps[0])

  const handleBack = useCallback(() => {
    setActiveStep(activeStep - 1)
  }, [activeStep])
  const handleNext = useCallback(() => {
    setActiveStep(activeStep + 1)
  }, [activeStep])

  const handleSubmit = useCallback(
    async data => {
      try {
        await axios({
          method: 'post',
          url: 'https://compeduo.cz/form/',
          data,
        })

        handleNext()
      } catch (e) {
        alert('Something went wrong.')
      }
    },
    [activeStep]
  )

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
        onSubmit={handleSubmit}
        validate={values => {
          const errors: Partial<FormValues> = {}
          if (!values.phone) {
            errors.phone = 'Thông tin bắt buộc'
          }
          return errors
        }}
      >
        {formikProps => {
          return (
            <FormikForm>
              <ActiveStep {...formikProps} />
              <div className={classes.buttons}>
                {activeStep !== 0 && activeStep !== steps.length && (
                  <Button onClick={handleBack} className={classes.button}>
                    Quay trở lại
                  </Button>
                )}
                {activeStep === steps.length - 1 &&
                  getResultLevel(formikProps.values) !== ResultLevel.None && (
                    <Button
                      variant="contained"
                      color="primary"
                      disabled={formikProps.isSubmitting}
                      onClick={formikProps.submitForm}
                    >
                      Gửi đi
                      {formikProps.isSubmitting && (
                        <CircularProgress
                          size={24}
                          className={classes.progressIcon}
                        />
                      )}
                    </Button>
                  )}
                {activeStep < steps.length - 1 && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                  >
                    Tiếp tục
                  </Button>
                )}
              </div>
            </FormikForm>
          )
        }}
      </Formik>
    </>
  )
}
