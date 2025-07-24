import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import GroupsPage from './pages/GroupsPage'
import PageDetails from './pages/PageDetails'

function App() {





  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/group' element={<GroupsPage/>}></Route>
        <Route path='/all' element={<GroupsPage/>}></Route>
        <Route path='/gallery' element={<GroupsPage/>}></Route>
        <Route path='/result' element={<GroupsPage/>}></Route>
        <Route path='/details/:id' element={<PageDetails/>}></Route>
      
      
      </Routes>
    </>
  )
}

export default App
