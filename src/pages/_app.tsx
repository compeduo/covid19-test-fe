import {
  Box,
  CssBaseline,
  makeStyles,
  Paper,
  Typography,
} from '@material-ui/core'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const useStyles = makeStyles(theme => ({
  layout: {
    width: 'auto',
    marginTop: 0,
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: 0,
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  title: {
    cursor: 'pointer',
  },
  content: {
    paddingTop: theme.spacing(2),
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

      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Link href="/">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              className={classes.title}
            >
              Covid-19 Tester
            </Typography>
          </Link>
          <div className={classes.content}>
            <Component {...pageProps} />
          </div>
        </Paper>
      </main>
    </>
  )
}

export default MyApp
