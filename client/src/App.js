import './App.css';
import {BrowserRouter, browserRouter,  Route, Routes} from 'react-router-dom';
import Navbar from './components/pages/Navbar.js';
import Register from './components/pages/Register.js'
import Login from './components/pages/Login.js'
import Profile from './components/pages/Profile.js';

function App() {
  return (
    <div className="App">

      <h1 className='h1'>Filigree</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Navbar/>}>
            <Route index element={<Login/>} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="Profile" element={<Profile />} />

          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;