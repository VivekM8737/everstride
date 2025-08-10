import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Lineup  from './Components/Lineup';

function App() {
  return (
    <> 
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/services' element={<Lineup/>}/>
        </Routes>
      
      <Footer/>
        
      </Router> 
      
    </>
  )
}

export default App
