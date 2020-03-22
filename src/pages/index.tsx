import React from 'react'
import { Paper, makeStyles, Typography } from '@material-ui/core'
import { Form } from '~/components/Form'

const useStyles = makeStyles(theme => ({
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
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
}))

const Home = () => {
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography component="h1" variant="h4" align="center">
        Covid-19 Test
      </Typography>

      <Form />
    </Paper>
  )
}

export default Home
