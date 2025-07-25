import {Routes,Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import GroupsPage from './pages/GroupsPage'
import PageDetails from './pages/PageDetails'
import AllPage from './pages/AllPage'
import CardDetailsGroups from './components/cards/CardDetailsGroups'
function App() {





  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/group' element={<GroupsPage/>}></Route>
        <Route path='/all' element={<AllPage/>}></Route>
        <Route path='/gallery' element={<GroupsPage/>}></Route>
        <Route path='/result' element={<GroupsPage/>}></Route>
        <Route path='/album/:id' element={<PageDetails/>}></Route>
        <Route path='/grupo/:id' element={<CardDetailsGroups/>}></Route>
      
      
      </Routes>
    </>
  )
}

export default App
