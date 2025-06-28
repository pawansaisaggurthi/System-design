import './App.css';
import Body from './components/body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Teams from './components/Teams';

function App() {
  return (
    <div className="App">
      <header className='bg-black text-white py-4 flex justify-between'>
        <div>Hello</div>
        <div className='justify-between'>
          <nav className='justify-space-between'>
            <a href='/'>Home</a>
            <a href='/teams'>Teams</a>
            <a href='/login'>Login</a>
          </nav>
        </div>

      </header>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}></Route>

          {/* Created the wrapper component to handle the protected routes or auth gurds */}
          {/* Route has no path only element is called empty route */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/teams' element={<Teams />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
