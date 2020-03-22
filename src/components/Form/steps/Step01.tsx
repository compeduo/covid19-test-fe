import { FormGroup, Typography } from '@material-ui/core'
import { Field } from 'formik'
import { CheckboxWithLabel, RadioGroup } from 'formik-material-ui'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'

export const Step01: React.FC<StepProps> = ({ values }) => {
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
          <Field
            component={CheckboxWithLabel}
            name="longFever"
            type="checkbox"
            Label={{ label: 'Horečka nad 38°C více jak dva dny' }}
          />
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
