import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home'
import About from './routes/About';
import Model from './routes/Model'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/model' element={<Model />} />
      </Routes>
    </>
  );
}

export default App;