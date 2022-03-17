import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Box, Button, makeStyles, Typography } from '@material-ui/core'
import fetchComments from '../store/action-creators/comments'
import { useTypedSelector } from '../hooks/useTypedSelector'
import CommentsPost from './Comments'

interface Props {
  id: any
  title: string
  body: string
}

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
  commentsContainer: {
    backgroundColor: '#fffafa',
  },
}))

const Post: React.FC<Props> = ({ id, title, body }) => {
  const classes = useStyles()

  const { comments, error } = useTypedSelector(state => state.commentsReducer)
  const [showComments, setShowComments] = useState(false)
  const dispatch = useDispatch()

  const getComments = () => {
    dispatch(fetchComments(id))
    setShowComments(true)
    let userPost: HTMLElement | null = document.querySelector(`.userPost${id}`)
    if (userPost) {
      userPost.scrollIntoView()
    }
  }

  const setClick = () => {
    setShowComments(false)
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
        <Button className={classes.hideButton} onClick={setClick}>
          Hide
        </Button>
      </Box>
      {
        <Box className={classes.commentsContainer}>
          {showComments
            ? comments.map(comment =>
                id === comment.postId ? <CommentsPost key={comment.id} comment={comment} /> : null,
              )
            : null}
          {error ? <Typography>{error}</Typography> : null}
        </Box>
      }
    </Box>
  )
}

export default Post
