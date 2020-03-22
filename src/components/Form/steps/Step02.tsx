import { Typography } from '@material-ui/core'
import { Field } from 'formik'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'
import { TextField } from 'formik-material-ui'

export const Step02: React.FC<StepProps> = ({ values }) => {
  let message
  if (values.breathing || (values.fever && values.cough) || values.old) {
    message = 'Volejte ihned linku 155 a postupujte dle instrukcí operátora.'
  } else if (values.fever || values.cough) {
    message =
      'Kontaktujte telefonicky svého praktického lékaře nebo pohotovost (v případě, že voláte mimo jeho pracovní dobu).'
  } else if (values.fever && !values.longFever) {
    message =
      'Pokud máte pouze horečku po dobu kratší než 2 dny, je nutno brát ohled na sebe i ostatní. ' +
      'Zůstaňte v domácí karanténě, sledujte teplotu a užívejte léky proti horečce.'
  } else {
    message =
      'Pokud nemáte ani jeden z příznaků, nejedná se pravděpodobně o COVID-19. Průběžně sledujte svůj zdravotní stav a 2x denně si měřte teplotu.'
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Vyhodnocení
      </Typography>
      <Typography variant="body1" gutterBottom>
        {message}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Asistence
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nedokážete si to vyřídit sami? Zanechejte nám kontakt a náš operátor se
        Vám ozve.
      </Typography>
      <Field
        component={TextField}
        name="phone"
        type="text"
        label="Telefonní číslo"
        required
      />
    </>
  )
}
