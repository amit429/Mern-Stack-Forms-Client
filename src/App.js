import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import Registeration from './pages/Registeration';
import ContactUs from './pages/ContactUs';
import Query from './pages/Query';
import Main from './pages/Main';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Logout from './pages/Logout';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/welcome" element={<Landing/>}/>
          <Route path="/register" element={<Registeration/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/query" element={<Query/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/logout" element={<Logout/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
