import { FormGroup, makeStyles, Typography } from '@material-ui/core'
import { Field } from 'formik'
import { CheckboxWithLabel } from 'formik-material-ui'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'
import { Subtitle } from '~/components/Subtitle'

const useStyles = makeStyles(theme => ({
  secondLevel: {
    marginLeft: theme.spacing(4),
  },
}))

export const Step01: React.FC<StepProps> = ({ values }) => {
  const classes = useStyles()
  return (
    <>
      <Subtitle>
        Bạn có triệu chứng gì trong những lựa chọn dưới đây?
        <Typography variant="body1">(có thể chọn nhiều câu trả lời)</Typography>
      </Subtitle>
      <FormGroup>
        <Field
          component={CheckboxWithLabel}
          name="breathing"
          type="checkbox"
          Label={{
            label:
              'Cảm giác khó thở (Bạn bị thở gấp khi đi bộ bình thường hoặc khi sinh hoạt (khi thực hiện các hoạt động thường nhật), cảm thấy tức ngực, thiếu không khí, khó thở)',
          }}
        />
        <Field
          component={CheckboxWithLabel}
          name="fever"
          type="checkbox"
          Label={{ label: 'Sốt trên 38 độ' }}
        />
        {values.fever && (
          <div className={classes.secondLevel}>
            <Field
              component={CheckboxWithLabel}
              name="longFever"
              type="checkbox"
              Label={{ label: 'Kéo dài 2 ngày và hơn' }}
            />
          </div>
        )}
        <Field
          component={CheckboxWithLabel}
          name="cough"
          type="checkbox"
          Label={{ label: 'Ho khan' }}
        />
        <Field
          component={CheckboxWithLabel}
          name="old"
          type="checkbox"
          Label={{ label: 'Tôi trên 60 tuổi' }}
        />
      </FormGroup>
    </>
  )
}
