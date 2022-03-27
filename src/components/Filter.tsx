import React, { useCallback, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import { Container, Typography } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import fetchUsers from '../store/users/thunkUsers'
import { useTypedSelector } from '../hooks/useTypedSelector'
import fetchUserPosts from '../store/posts/thunkPosts'
import { debounce } from '../helpers/debounce'
import { useSearchParams } from 'react-router-dom'
import { User } from '../store/users/typesUsers'

const useStyles = makeStyles(() => ({
  formControl: {
    minWidth: 120,
    maxWidth: '100%',
  },
  error: {
    fontSize: '1.5rem',
    color: 'red',
  },
}))

const ITEM_HEIGHT = 90
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 290,
    },
  },
}

const Filter: React.FC = () => {
  const classes = useStyles()

  const { users, error } = useTypedSelector(state => state.userReducer)
  const { posts } = useTypedSelector(state => state.userPostsReducer)

  const [searchParams, setSearchParams] = useSearchParams()
  const postQuery = searchParams.get('user') || ''

  const [userInfo, setUserInfo] = useState<User[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    !userInfo.toString() && users && getFilteredUsers()
  }, [posts, users])

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  useEffect(() => {
    dispatch(fetchUserPosts(postQuery))
  }, [postQuery])

  const setUsersInfo = (event: React.ChangeEvent<{ value: unknown }>) => {
    let targetValue = event.target.value as User[]
    setUserInfo(targetValue)
    //@ts-ignore
    debouceGetPosts(targetValue)
    console.log(targetValue)
  }

  const getPosts = (targetValue: User[]) => {
    let usersId = targetValue.map(user => user.id)
    let userId = usersId.map(id => `&userId=${id}`).join('')
    setSearchParams({ user: userId })
  }

  const debouceGetPosts = useCallback(debounce(getPosts, 600), [])

  const getFilteredUsers = () => {
    let urlPostsId = posts.map(post => post.userId)
    let uniqueUrlPostsId = urlPostsId.filter((id, pos) => urlPostsId.indexOf(id) === pos)

    let filteredUsers = users.filter(user => {
      for (let i = 0; i < uniqueUrlPostsId.length; i++) {
        if (user.id === uniqueUrlPostsId[i]) {
          return user
        }
      }
    })
    if (filteredUsers.length !== users.length) {
      setUserInfo(filteredUsers)
    }
  }

  if (error) {
    return (
      <Container>
        <Typography className={classes.error}>{error && error}</Typography>
      </Container>
    )
  }

  return (
    <Container>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-checkbox-label">Users</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={userInfo}
          onChange={setUsersInfo}
          input={<Input />}
          renderValue={(selectedUsers: any) =>
            selectedUsers.map((item: { name: string }) => item.name).join(', ')
          }
          MenuProps={MenuProps}
        >
          {users.map(user => (
            //@ts-ignore
            <MenuItem key={user.id} value={user}>
              <Checkbox checked={userInfo.indexOf(user) > -1} />
              <ListItemText primary={user.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}

export default Filter
