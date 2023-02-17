import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Login from './component/Login';
import Dashboard from './component/Dashboard';
import NotFound from './component/NotFound';
import POS from './component/POSjs';
function MainRoute() {
  return (
    
    <>
  
        <Routes>       
            <Route excat path="*" element={<NotFound />} />   
            <Route excat path="/login" element={<Login  />} />
            <Route excat path="/dashboard" element={<Dashboard />} />  
            <Route excat path="/pos" element={<POS />} /> 
        </Routes>
   
    </>
  )
}

export default MainRoute
