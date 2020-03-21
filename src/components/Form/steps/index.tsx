import { FormikProps } from 'formik'
import { FormValues } from '~/components/Form'
import { Step01 } from './Step01'
import { Step02 } from './Step02'

export enum StepName {
  Step01,
  Step02,
}

export type StepProps = FormikProps<FormValues>

export { Step01, Step02 }
