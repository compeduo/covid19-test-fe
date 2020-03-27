import { makeStyles, Typography } from '@material-ui/core'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import React, { useCallback, useState } from 'react'

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
  },
}))

export const GdprInfo: React.FC = () => {
  const classes = useStyles()
  const [showGdpr, setShowGdpr] = useState(false)
  const toggleShowGdpr = useCallback(() => {
    setShowGdpr(prevState => !prevState)
  }, [])

  const ToggleIcon = showGdpr ? ExpandLess : ExpandMore

  return (
    <div className={classes.container}>
      <div>
        <Typography variant="body2" gutterBottom onClick={toggleShowGdpr}>
          Bằng cách gửi đơn này, bạn đồng ý xử lý dữ liệu cá nhân
        </Typography>
        {showGdpr && (
          <Typography variant="body2" gutterBottom color="textSecondary">
            Chúng tôi (Làm Cha Mẹ CZ, Compeduo, Thông Tin Y Tế tại CZ cùng các
            phiên dịch viên đồng hành) tuân theo Quy định chung về bảo mật thông
            tin (General Data Protection Regulation – GDPR), tuyệt đối không
            cung cấp thông tin người dùng cho bên thứ ba, chỉ gửi email đến
            những thành viên đồng ý nhận bản tin và không lưu trữ thông tin của
            người dùng khi chưa được phép.
          </Typography>
        )}
      </div>
      <ToggleIcon onClick={toggleShowGdpr} />
    </div>
  )
}
