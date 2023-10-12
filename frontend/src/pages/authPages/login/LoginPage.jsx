import React, { useState ,useEffect} from 'react';
import AuthBOX from './../../../components/AuthBOX';
import Loginheader from './Loginheader';
import LoginInputs from './loginInputs';
import LoginFooter from './loginFooter';
import {validateLoginForm} from "../../../utils/validates"
import { useDispatch } from 'react-redux';
import {login} from "../../../store/actions/authAction"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("")
  const [isFormated, setisFormated] = useState(false)

  useEffect(() => {
    setisFormated(validateLoginForm({mail,password}))
    
  },[mail,password,setisFormated])
  const handleLogin=async()=>{
    if(isFormated){
      const userDetails={
        mail,
        password,
      }
      try {
        await dispatch(login(userDetails,navigate))
        
      } catch (error) {
        
      }
     }
  }

  return (
    <AuthBOX>
     <Loginheader/>
     <LoginInputs
     mail={mail}
     setmail={setmail}
     password={password}
     setpassword={setpassword}
     />
     <LoginFooter isFormated={isFormated} handleLogin={handleLogin}/>
      
      </AuthBOX>
   
  )
}

export default LoginPage