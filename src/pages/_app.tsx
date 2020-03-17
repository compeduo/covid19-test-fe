import {
  AppBar,
  CssBaseline,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React, { useEffect } from 'react'

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // Remove the server-side injected CSS.
  //   const jssStyles = document.querySelector('#jss-server-side')
  //   if (jssStyles) {
  //     jssStyles.parentElement.removeChild(jssStyles)
  //   }
  // }, [])

  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Covid-90 test</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <CssBaseline />

      <AppBar position="absolute" color="default" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Covid-19 test
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.layout}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
