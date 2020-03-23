import { FormGroup, makeStyles, Typography } from '@material-ui/core'
import { Field } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'

const useStyles = makeStyles(theme => ({
  secondLevel: {
    marginLeft: theme.spacing(4),
  },
}))

export const Step01: React.FC<StepProps> = ({ values }) => {
  const classes = useStyles()
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Máte některý z těchto symptomů? (můžete vybrat více možností)
      </Typography>
      <FormGroup>
        <Field
          component={CheckboxWithLabel}
          name="breathing"
          type="checkbox"
          Label={{ label: 'Dušnost (pocit ztíženého dýchání)' }}
        />
        <Field
          component={CheckboxWithLabel}
          name="fever"
          type="checkbox"
          Label={{ label: 'Horečka nad 38°C' }}
        />
        {values.fever && (
          <div className={classes.secondLevel}>
            <Field
              component={CheckboxWithLabel}
              name="longFever"
              type="checkbox"
              Label={{ label: 'Horečka nad 38°C více jak dva dny' }}
            />
          </div>
        )}
        <Field
          component={CheckboxWithLabel}
          name="cough"
          type="checkbox"
          Label={{ label: 'Suchý kašel' }}
        />
        <Field
          component={CheckboxWithLabel}
          name="old"
          type="checkbox"
          Label={{ label: 'Více jak 60 let' }}
        />
      </FormGroup>
    </>
  )
}
