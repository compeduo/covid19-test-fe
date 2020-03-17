import { Form, Formik, Field } from 'formik'
import React from 'react'
import {
  Paper,
  makeStyles,
  Typography,
  FormControlLabel,
  Radio,
  FormLabel,
} from '@material-ui/core'
import { TextField, RadioGroup } from 'formik-material-ui'

interface StepOption {
  label: string
  value: string | number | boolean
  content: Step
}

interface Step {
  content: React.ReactNode
  options: StepOption[]
}
//
// const coronaWizard: Step = {
//   content: (
//
//   )
// }

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}))

function Home() {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
        Step 1
      </Typography>

      <Formik<{
        coronaContact: string
        coronaContactCountry: string
        coronaContactCity: string
      }>
        initialValues={{
          coronaContact: '',
          coronaContactCountry: '',
          coronaContactCity: '',
        }}
        onSubmit={values => {
          console.log(values)
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <Field component={RadioGroup} name="coronaContact">
              <FormLabel component="legend">
                Byl jste v kontaktu s někým s prokázanou infekcí Covid-19 nebo
                jste byl mimo ČR za posledních 30 dnů? (Napište kde)
              </FormLabel>
              <FormControlLabel
                value="yes"
                control={<Radio disabled={isSubmitting} />}
                label="Ano"
                disabled={isSubmitting}
              />
              <FormControlLabel
                value="no"
                control={<Radio disabled={isSubmitting} />}
                label="Ne"
                disabled={isSubmitting}
              />
            </Field>
            {values.coronaContact === 'yes' && (
              <>
                <Field
                  component={TextField}
                  name="coronaContactCountry"
                  type="text"
                  label="Stát"
                  fullWidth
                />
                <Field
                  component={TextField}
                  name="coronaContactCity"
                  type="text"
                  label="Město"
                  fullWidth
                />
              </>
            )}
          </Form>
        )}
      </Formik>
    </Paper>
  )
}

export default Home
