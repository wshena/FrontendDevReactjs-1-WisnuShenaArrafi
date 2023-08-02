import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Filter from './components/Filter';
import Home from './pages/Home';
import Details from './components/Details';
import OpenNow from './pages/OpenNow';
import Japanese from './pages/category/Japanese';
import Asian from './pages/category/Asian';
import British from './pages/category/British';
import Expensive from './pages/price/Expensive';
import Medium from './pages/price/Medium';
import Cheap from './pages/price/Cheap';


function App() {

  return (
    <>
    <Router>
      <Filter />
      <Routes>
        <Route path='/' Component={Home}/>
      </Routes>
      <Routes>
        <Route path='/details' Component={Details} />
      </Routes>
      <Routes>
        <Route path='/opennow' Component={OpenNow} />
      </Routes>
      <Routes>
        <Route path='/cuisine/japanese' Component={Japanese} />
      </Routes>
      <Routes>
        <Route path='/cuisine/asian' Component={Asian} />
      </Routes>
      <Routes>
        <Route path='/cuisine/british' Component={British} />
      </Routes>
      <Routes>
        <Route path='/price/expensive' Component={Expensive} />
      </Routes>
      <Routes>
        <Route path='/price/medium' Component={Medium} />
      </Routes>
      <Routes>
        <Route path='/price/cheap' Component={Cheap} />
      </Routes>
    </Router>
    </>
  )
}

export default App
