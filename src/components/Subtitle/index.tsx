import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}))

export const Subtitle: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Typography variant="h6" className={classes.container}>
      {children}
    </Typography>
  )
}
