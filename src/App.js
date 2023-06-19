import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Resetpassword from './Pages/Resetpassword';
import { createContext, useState } from 'react';
import UserProfile from './Pages/UserProfile';
import Askquestion from './Pages/Askquestion';
import { useSelector } from 'react-redux';
import Viewquestion from './Pages/Viewquestion';

const data = createContext()
function App() {
  const userDetails = useSelector((state)=>{return state.firstname})
  const [loggedinuser,setUser] = useState(null);
  return (
    <BrowserRouter>
    <data.Provider value={[loggedinuser,setUser]}>
      <Routes>
          <Route exact path = '/' element={userDetails == '' ? <Login/>: <Login/>}/>

          <Route exact path = '/signup' element={userDetails == '' ? <Signup/> :<Signup/>}/>

          <Route exact path = '/home' element={<Home/>}/>

          <Route exact path = '/resetpsw' element={userDetails == '' ? <Resetpassword/>:<Resetpassword/>}/>

          <Route exact path = '/userprofile' element={userDetails == '' ? <Login/>:<UserProfile/>}/>

          <Route exact path = '/askquestion' element={userDetails == '' ? <Login/>:<Askquestion/>}/>

          <Route exact path = '/question/:id' element={userDetails == '' ? <Login/>:<Viewquestion/>}/>

          <Route exact path = '*' element={<p>PAGE NOT FOUND</p>}/>

      </Routes>
      </data.Provider>
    </BrowserRouter>
  );
}

export default App;
export {data};