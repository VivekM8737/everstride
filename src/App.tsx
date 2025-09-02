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
import About from './Components/About';


function App() {
  return (
    <> 
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/lineup' element={<Lineup/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      
      <Footer/>
        
      </Router> 
      
    </>
  )
}

export default App
