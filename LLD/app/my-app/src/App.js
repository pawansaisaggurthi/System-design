import './App.css';
import Body from './components/body';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import Teams from './components/Teams';
import Header from './components/Header';
import { useState } from "react";
import About from './components/About';
import Accordion from './components/Accordion';
import Comments from './components/comments/comments';
import ImageSlider from './components/image-slider/ImageSlider';
import Pagination from './components/pagination/Pagination';


function App() {

      const [lang,setLang] = useState("en")
  
  return (
    <div className="App">
      <Header lang={lang} setLang={setLang}/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Body />}></Route>

          {/* Created the wrapper component to handle the protected routes or auth gurds */}
          {/* Route has no path only element is called empty route */}
          <Route element={<ProtectedRoutes />}>
            <Route path='/teams' element={<Teams />}></Route>
          </Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/about' element={<About lang={lang}/>}></Route>
          <Route path='/accordion' element={<Accordion/>}></Route>
          <Route path='/comments' element={<Comments/>}></Route>
          <Route path='/pagination' element={<Pagination/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
