import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'
import fetchUserPosts from '../store/action-creators/userPosts'
import Post from './Post'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
}))

const UserList: React.FC = () => {
  const classes = useStyles()

  const { userPosts, error, loading } = useTypedSelector(state => state.userPostsReducer)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchUserPosts(''))
  }, [])

  if (loading) {
    return (
      <Container>
        <Typography component="h1">Loading...</Typography>
      </Container>
    )
  }
  if (error) {
    return (
      <Container>
        <Typography component="h1">{error}</Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Typography component="h1" className={classes.title}>
        Posts:
      </Typography>
      {userPosts.map(post => (
        <Post key={post.id} id={post.id} title={post.title} body={post.body} />
      ))}
    </Container>
  )
}
export default UserList
