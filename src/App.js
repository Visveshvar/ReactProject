import { BrowserRouter,Routes,Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import About from './components/About';
import Home from './components/home';
import Regform from './components/Register';
import Login from './components/form';
import Con from './components/Contacts';
import './CSS/Home.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/reg' element={<Regform/>}></Route>
          <Route path='/log' element={<Login/>}></Route>
          <Route path='/contact' element={<Con/>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React0
        </a>
      </header> */}
    </div>
  );
};

export default App;
