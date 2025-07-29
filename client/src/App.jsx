import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GroupPage from './pages/GroupPage';
import PageDetails from './pages/PageDetails';
import AllPage from './pages/AllPage';
import CardDetailsGroups from './components/cards/CardDetailsGroups';
import IdolsDetsilsPage from './pages/IdolsDetsilsPage';
import ResultPage from './pages/ResultPage'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/group' element={<GroupPage />} />
        <Route path='/all' element={<AllPage />} />
        <Route path='/album/:id' element={<PageDetails />} />
        <Route path='/grupo/:id' element={<CardDetailsGroups />} />
        <Route path='/integrante/:id' element={<IdolsDetsilsPage />} />
        <Route path='/result' element={<ResultPage/>} />
      </Routes>
    </>
  );
}

export default App;
