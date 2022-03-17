import React from 'react'
import { Box } from '@material-ui/core'
import SimpleSelect from './components/Filter'
import Posts from './components/Posts'

function App() {
  return (
    <Box>
      <SimpleSelect />
      <Posts />
    </Box>
  )
}

export default App
