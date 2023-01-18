import React from 'react';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
      <Router>
        <Routes>
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    
  );
}

export default App;
