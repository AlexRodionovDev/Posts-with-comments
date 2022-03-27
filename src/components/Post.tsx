import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import fetchComments from '../store/comments/thunkComments'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CommentsPost from './Comments'

const useStyles = makeStyles(() => ({
  post: {
    backgroundColor: '#e3f3ff',
    margin: '1rem 0 1rem 0',
    padding: '1rem',
  },
  postTitle: {
    fontWeight: 500,
    textAlign: 'center',
  },
  postBody: {
    paddingBottom: '1rem',
    textIndent: '1.5rem',
  },
  expandButton: {
    marginLeft: 'calc(50% - 45px)',
    marginBottom: '0.5rem',
  },
  hideButton: {
    float: 'right',
  },
  display_none: {
    display: 'none',
  },
  error: {
    fontSize: ' 1rem',
    color: 'red',
  },
  loading: {
    fontSize: ' 1.2rem',
    textAlign: 'center',
    lineHeight: '2rem',
    height: '2rem',
  },
  commentsContainer: {
    backgroundColor: '#fffafa',
  },
}))

interface Props {
  id: any
  title: string
  body: string
  onClick: any
  selectedId: number | null
  open: boolean
}

const Post: React.FC<Props> = ({ id, title, body, onClick, selectedId, open }) => {
  const classes = useStyles()

  const { comments, error } = useTypedSelector(state => state.commentsReducer)
  const dispatch = useDispatch()

  const getComments = () => {
    !open && dispatch(fetchComments(id))
    let userPost: HTMLElement | null = document.querySelector(`.userPost${id}`)
    if (userPost) {
      userPost.scrollIntoView()
    }
    onClick(id)
  }

  return (
    <Box className={`${classes.post} userPost${id}`}>
      <Typography className={classes.postTitle} component="h3" style={{ fontSize: 25 }}>
        {title}
      </Typography>
      <Typography className={classes.postBody} component="p">
        {body}
      </Typography>
      <Box>
        <Button
          id={id}
          className={classes.expandButton}
          variant="contained"
          color="primary"
          onClick={getComments}
        >
          Expand
        </Button>

        {<Typography className={classes.error}>{error && error}</Typography>}
      </Box>
      <Box className={classes.commentsContainer}>
        {open && !comments.toString() ? <Box className={classes.loading}>Loading.....</Box> : null}
        {comments.map(comment =>
          id === selectedId ? <CommentsPost key={comment.id} comment={comment} /> : error,
        )}
      </Box>
    </Box>
  )
}

export default Post
