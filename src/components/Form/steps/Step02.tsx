import { Box, Typography } from '@material-ui/core'
import { Field } from 'formik'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'
import { TextField } from 'formik-material-ui'
import { GdprInfo } from '~/components/GdprInfo'
import { Subtitle } from '~/components/Subtitle'
import { getResultLevel, ResultLevel, resultMessage } from '~/utils/results'

export const Step02: React.FC<StepProps> = ({ values }) => {
  const resultLevel = getResultLevel(values)

  return (
    <>
      <Subtitle>Đánh giá</Subtitle>
      <Typography variant="body1" gutterBottom>
        {resultMessage[resultLevel]}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Kết quả đánh giá chỉ mang tính chất tham khảo. Để biết thêm thông tin,
        hãy cập nhật trang web tiếng Việt về Covid-19:{' '}
        <a href="http://covidinfo.cz/">www.covidinfo.cz</a>.
      </Typography>
      {resultLevel !== ResultLevel.None && (
        <>
          <Subtitle>Hỗ trợ</Subtitle>
          <Typography variant="body1" gutterBottom>
            Các bạn không giỏi tiếng Séc hoặc cần hỗ trợ trong vấn đề khác? Hãy
            để lại thông tin liên lạc và các phiên dịch viên của chúng tôi sẽ
            liên lạc với bạn.
          </Typography>
          <Box mb={2}>
            <Field
              component={TextField}
              name="phone"
              type="text"
              label="Số điện thoại"
              required
            />
          </Box>
          <GdprInfo />
        </>
      )}
    </>
  )
}
