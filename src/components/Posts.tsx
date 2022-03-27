import React, { useState } from 'react'
import { Container, makeStyles, Typography } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Post from './Post'

const useStyles = makeStyles(() => ({
  title: {
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  error: {
    fontSize: '1.5rem',
    color: 'red',
  },
}))

const UserList: React.FC = () => {
  const classes = useStyles()

  const { posts, error, loading } = useTypedSelector(state => state.userPostsReducer)
  // const dispatch = useDispatch()
  const [selectedId, setSelectedId] = useState(0)
  // console.log(posts)

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
        <Typography component="h1" className={classes.error}>
          {error}
        </Typography>
      </Container>
    )
  }

  return (
    <Container>
      <Typography component="h1" className={classes.title}>
        Posts:
      </Typography>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          body={post.body}
          selectedId={selectedId}
          open={selectedId === post.id}
          onClick={() => {
            selectedId === post.id ? setSelectedId(0) : setSelectedId(post.id)
          }}
        />
      ))}
    </Container>
  )
}
export default UserList
