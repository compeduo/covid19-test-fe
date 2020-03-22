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
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}))

function MyApp({ Component, pageProps }: AppProps) {
  const classes = useStyles()

  return (
    <>
      <Head>
        <title>Covid-19 Test</title>
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
            Covid-19 Test
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
