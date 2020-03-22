import { Typography } from '@material-ui/core'
import { Field } from 'formik'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'
import { TextField } from 'formik-material-ui'
import { getResultLevel, ResultLevel, resultMessage } from '~/utils/results'

export const Step02: React.FC<StepProps> = ({ values }) => {
  const resultLevel = getResultLevel(values)

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Vyhodnocení
      </Typography>
      <Typography variant="body1" gutterBottom>
        {resultMessage[resultLevel]}
      </Typography>
      {resultLevel !== ResultLevel.None && (
        <>
          <Typography variant="h6" gutterBottom>
            Asistence
          </Typography>
          <Typography variant="body1" gutterBottom>
            Nedokážete si to vyřídit sami? Zanechejte nám kontakt a náš operátor
            se Vám ozve.
          </Typography>
          <Field
            component={TextField}
            name="phone"
            type="text"
            label="Telefonní číslo"
            required
          />
        </>
      )}
    </>
  )
}
