import { makeStyles } from '@material-ui/styles'
import React from 'react'

const useStyles = makeStyles(theme => ({
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}))

export const BaseStep: React.FC<{ buttons: React.ReactNode }> = ({
  children,
  buttons,
}) => {
  const classes = useStyles()

  return (
    <>
      {children}
      <div className={classes.buttons}>{buttons}</div>
    </>
  )
}
