import 'bootstrap/dist/css/bootstrap.min.css'
import {Route, Routes} from 'react-router'
import Signup from './Sign-up'
import Login from './Login'



function App() {


  return (
   <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='/Login' element={<Login/>}/>
   </Routes>
  )
}

export default App
