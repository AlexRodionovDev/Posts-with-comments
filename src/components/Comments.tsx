import React from 'react'
import { makeStyles, Box, Typography } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'

interface Props {
  comment: any
}

const useStyles = makeStyles(() => ({
  comment: {
    padding: '0.5rem',
    marginBottom: '0.5rem',
  },
  email: {
    color: 'grey',
    fontSize: '1.2rem',
    fontWeight: 500,
  },
  name: {
    fontWeight: 700,
  },
  body: {
    textIndent: '1.5rem',
    marginTop: '0.3rem',
  },
}))

const CommentsPost: React.FC<Props> = ({ comment }) => {
  const classes = useStyles()
  const { loading } = useTypedSelector(state => state.commentsReducer)

  if (loading) {
    return (
      <Box className={classes.comment}>
        <Typography className={classes.email}>Loading...</Typography>
      </Box>
    )
  }

  return (
    <Box className={classes.comment}>
      <Box>
        <Typography className={classes.email}>E-mail: {comment.email}</Typography>
        <Typography className={classes.name}>Title: {comment.name}</Typography>
        <Typography className={classes.body}>{comment.body}</Typography>
      </Box>
    </Box>
  )
}

export default CommentsPost
