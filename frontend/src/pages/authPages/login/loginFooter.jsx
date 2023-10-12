import React from 'react'
import CustomPrimayButton from '../../../components/CustomPrimayButton'
import RedirectInfo from '../../../components/RedirectInfo'
import {useNavigate} from "react-router-dom"
import {Tooltip} from "@mui/material"

export default function LoginFooter({handleLogin,isFormated}) {
  const Navigate=useNavigate();
  const handlePushToRegisterPage=()=>{
    Navigate('/register')

  }
  const getFormatedValidMessage=()=>{
    return 'Press to log in !'
  }
  const getFormatedNotValidMessage=()=>{
    return 'Enter correct e-mail address and password should contains 6 to 12 characters'
  }

  return (
    <>
    <Tooltip 
    title={!isFormated?getFormatedNotValidMessage():getFormatedValidMessage()}
    
    >
    <div>
    <CustomPrimayButton
    label="Login"
    AddtionStyle={{marginTop:"30px"}}
    disabled={!isFormated}
    onClick={handleLogin}

    />  
    </div>
    </Tooltip>
    <RedirectInfo  
     text="Need an account? "
      redirectText='Create an account' 
       additionalStyles={{marginTop:'5px'}}
       redirectHandler={handlePushToRegisterPage}
       
       
       />

    </>

  )
}
