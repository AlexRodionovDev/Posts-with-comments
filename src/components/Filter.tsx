import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import { Container, Typography } from '@material-ui/core'
import { useTypedSelector } from '../hooks/useTypedSelector'
import fetchUsers from '../store/action-creators/users'
import fetchUserPosts from '../store/action-creators/userPosts'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}))

export default function SimpleSelect() {
  const classes = useStyles()

  useEffect(() => {
    dispatch(fetchUsers())
  }, [])

  const { users, error } = useTypedSelector(state => state.userReducer)
  const dispatch = useDispatch()
  const [userValue, setUserValue] = useState('')

  const handleChange = (e: React.ChangeEvent<{ value: unknown }>) => {
    setUserValue(e.target.value as string)
    if (e.target.value) {
      dispatch(fetchUserPosts(`?userId=${e.target.value}`))
    } else {
      dispatch(fetchUserPosts(''))
    }
  }

  if (error) {
    return (
      <Container>
        <Typography style={{ color: 'red' }}>{error}</Typography>
      </Container>
    )
  }

  return (
    <Container>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">User</InputLabel>
        <Select
          native
          value={userValue}
          onChange={handleChange}
          label="Age"
          inputProps={{
            name: 'user',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          {users.map(user => (
            <option value={user.id} key={user.id} id={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}
