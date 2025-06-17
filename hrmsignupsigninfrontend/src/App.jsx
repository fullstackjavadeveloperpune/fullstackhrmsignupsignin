import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { Welcome } from './components/Welcome'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <>
      
      <Router>
        <Routes>
          <Route exact path='/' element={<SignIn />} />
          <Route exact path='/signup' element={<SignUp />} />
          <Route exact path='/welcome' element={<Welcome />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
