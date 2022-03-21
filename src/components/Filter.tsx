import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import ListItemText from '@material-ui/core/ListItemText'
import Select from '@material-ui/core/Select'
import Checkbox from '@material-ui/core/Checkbox'
import { useDispatch } from 'react-redux'
import fetchUsers from '../store/action-creators/users'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { Container, Typography } from '@material-ui/core'
import fetchUserPosts from '../store/action-creators/userPosts'

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

const MultipleSelect: React.FC = () => {
  const classes = useStyles()

  const [userInfo, setUserInfo] = useState<object[]>([])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  const { users, error } = useTypedSelector(state => state.userReducer)

  const handleChange = (
    event: React.ChangeEvent<{
      value: [
        {
          address: object
          company: object
          email: string
          id: number
          name: string
          phone: string
          username: string
          website: string
        },
      ]
    }>,
  ) => {
    setUserInfo(event.target.value)
    let usersId = event.target.value.map(user => user.id)
    let userId = usersId.map(id => `&userId=${id}`).join('')
    dispatch(fetchUserPosts(userId))
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
        <InputLabel id="demo-mutiple-checkbox-label">User</InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={userInfo}
          onChange={handleChange}
          input={<Input />}
          renderValue={(selectedUsers: object[]) =>
            selectedUsers.map((item: any) => item.name).join(', ')
          }
          MenuProps={MenuProps}
        >
          {users.map(user => (
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

export default MultipleSelect
