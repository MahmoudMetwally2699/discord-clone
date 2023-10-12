import React, { useState ,useEffect} from 'react';
import AuthBOX from './../../../components/AuthBOX';
import Loginheader from './registerHeader';
import LoginInputs from './registerInputs';
import LoginFooter from './registerFooter';
import {validateRegisterForm} from "../../../utils/validates"
import { useDispatch } from 'react-redux';
import {register} from "../../../store/actions/authAction"
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("")
  const [username, setusername] = useState("")
  const [isFormated, setisFormated] = useState(false)

  useEffect(() => {
    setisFormated(validateRegisterForm({mail,password,username}))
    
  },[mail,password,setisFormated])
  const handleLogin=async()=>{
   if(isFormated){
    const userDetails={
      mail,
      password,
      username
    }
    try {
      await dispatch(register(userDetails,navigate))
      
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
     username={username}
     setusername={setusername}
     />
     <LoginFooter isFormated={isFormated} handleLogin={handleLogin}/>
      
      </AuthBOX>
   
  )
}

export default LoginPage