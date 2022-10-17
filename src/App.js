import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Landing from './pages/Landing';
import Registeration from './pages/Registeration';
import ContactUs from './pages/ContactUs';
import Query from './pages/Query';
import Main from './pages/Main';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/welcome" element={<Landing/>}/>
          <Route path="/register" element={<Registeration/>}/>
          <Route path="/contact-us" element={<ContactUs/>}/>
          <Route path="/query" element={<Query/>}/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
