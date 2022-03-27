import React from 'react'
// import { Box } from '@material-ui/core'
import Filter from './components/Filter'
import Posts from './components/Posts'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

function App() {
  // const { search } = useLocation()
  // console.log(serch)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter />
                <Posts />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
