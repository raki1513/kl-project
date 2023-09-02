import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';

import HomePage from './pages/Home.page';
import LoginPage from './pages/Login.page';
import Signuppage from './pages/Signup.page';

import { createContext, useState } from 'react';

export const Token = createContext();
function App() {  
  const location = useLocation();
  const [token, setToken] = useState(null);

  return (
    <Token.Provider value={[token,setToken]}>
    <div className="App">
      <Routes location={location} key={location.pathname}>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/signup' element={<Signuppage/>}/>

     
      
      </Routes>
    </div>
    </Token.Provider>
  );
}

export default App;

