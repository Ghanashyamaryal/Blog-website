
import './App.css';
import Header from "./components/header/Header"
import Footer from "./components/footer/footer"
import {Outlet} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import authservice from './appwrite/auth';
import { login, logout } from "./store/authSlice"
function App() {

  const [loading, setloading] = useState(false);
  const dispatch = useDispatch()

  useEffect(() => {
    authservice.userGet().then((userdata) => {
      if (userdata) {
        dispatch(login({ userdata }))
      }
      else {
        dispatch(logout())
      }
    }).finally(() => {
      setloading(false)
    })
  }, [])

  return !loading ? (
    <div style={{background:"red"}}>
      <Header />
      <Outlet/>
      <Footer />
    </div>
  ) 
  : "LOading............."
    
  
}

export default App;
