import { Typography, Box } from '@material-ui/core'
import React from 'react'
import { StepProps } from '~/components/Form/steps/index'

export const Step03: React.FC<StepProps> = () => {
  return (
    <Box mt={2}>
      <Typography variant="body1" gutterBottom>
        Xin cảm ơn! Chúng tôi sẽ cố gắng để liên lạc với bạn trong thời gian sớm
        nhất. Các phiên dịch viên của chúng tôi đều đang làm việc hết công suất,
        nếu phải chờ lâu, mong bạn thông cảm. Trong trường hợp tình trạng sức
        khỏe có chuyển biến xấu, hãy liên lạc trực tiếp với 1212 hoặc 155.
      </Typography>
    </Box>
  )
}
