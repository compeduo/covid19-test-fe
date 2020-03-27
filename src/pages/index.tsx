import Link from 'next/link'
import React from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  testButtonContainer: {
    marginTop: theme.spacing(2),
    textAlign: 'center',
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="body1" gutterBottom>
        Chào mừng bạn đến với trang web Covid-19 Tester.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Tại đây, bạn có thể làm thử “xét nghiệm” trực tuyến Covid-19. Dựa trên
        những triệu chứng thường gặp nhất, test sẽ đánh giá và đưa ra kết quả về
        tình trạng sức khoẻ của bạn. Các câu hỏi và những lời khuyên được lập ra
        bởi các sinh viên y dựa theo các hướng dẫn chính thức của Viện sức khỏe
        quốc gia SZÚ (cập nhật ngày 18.3.2020) và các thông tin trên trang web
        chính thức của Bộ y tế CHS. Trong trường hợp cần hỗ trợ phiên dịch liên
        quan đến Covid-19, xin vui lòng làm trắc nghiệm và sau đó để lại thông
        tin liên lạc cho các phiên dịch viên của chúng tôi.
      </Typography>
      <div className={classes.testButtonContainer}>
        <Link href="/test">
          <Button variant="contained" color="primary">
            Tôi muốn làm xét nghiệm trực tuyến
          </Button>
        </Link>
      </div>
    </>
  )
}

export default Home
