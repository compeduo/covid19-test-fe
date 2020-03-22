import { Typography } from '@material-ui/core'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'

export const Step03: React.FC<StepProps> = () => {
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Informace odeslány
      </Typography>
      <Typography variant="body1" gutterBottom>
        Děkujeme za odeslání informací. Náš operátor Vás bude kontaktovat.
      </Typography>
    </>
  )
}
