import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Loginpage1 from './pages/Loginpage1'
import Signinpage2 from "./pages/Signinpage2"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Loginpage1/>} />
          <Route path="/signup" element={<Signinpage2 />} />
          <Route path="*" element={<h1>ERORR 404  / wali</h1>} /> 
        </Routes>
      </Router>
    </>
  )
}

export default App
