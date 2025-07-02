import './App.css';
 import Navbar from './components/Navbar.js';
 import Register from './components/Register.js'
 import Login from './components/Login.js'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <Register />
      <p>Hello World!</p>
    </div>
  );
}

export default App;