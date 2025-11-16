import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';
import PageDetails from './pages/PageDetails';
import AllPage from './pages/AllPage';
import CardDetailsGroups from './components/cards/CardDetailsGroups';
import IdolsDetsilsPage from './pages/IdolsDetsilsPage';
import ResultPage from './pages/ResultPage'
import SongsPage from './pages/SongsPage';
import NewData from './pages/NewData';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/all' element={<AllPage />} />
        <Route path='/album/:id' element={<PageDetails />} />
        <Route path='/grupo/:id' element={<GroupPage/>} />
        <Route path='/integrante/:id' element={<IdolsDetsilsPage />} />
        <Route path='/result' element={<ResultPage/>} />
        <Route path='/songs' element={<SongsPage/>} />
        <Route path='/newData' element={<NewData/>} />
        
      </Routes>
    </>
  );
}

export default App;
