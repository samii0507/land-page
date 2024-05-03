

import './App.css'
import Doctors from './components/Doctors'
import Facilities from './components/Facilities'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Service from './components/Service'
import Blog from './components/Blog'



function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Home/>
        <Service/>
        <Doctors/>
        <Facilities/>
        <Blog/>
      </div>
    </>
  )
}

export default App
