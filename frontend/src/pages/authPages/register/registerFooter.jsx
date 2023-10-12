import React from 'react'
import CustomPrimayButton from '../../../components/CustomPrimayButton'
import RedirectInfo from '../../../components/RedirectInfo'
import {useNavigate} from "react-router-dom"
import {Tooltip} from "@mui/material"

export default function RegisterFooter({handleLogin,isFormated}) {
  const Navigate=useNavigate();
  const handlePushToLoginPage=()=>{
    Navigate('/login')

  }
  const getFormatedValidMessage=()=>{
    return 'Press to Register !'
  }
  const getFormatedNotValidMessage=()=>{
    return 'Enter correct e-mail address and password should contains 6 to 12 characters and username should be between 2 to 12 characters'
  }

  return (
    <>
    <Tooltip 
    title={!isFormated?getFormatedNotValidMessage():getFormatedValidMessage()}
    
    >
    <div>
    <CustomPrimayButton
    label="Register"
    AddtionStyle={{marginTop:"30px"}}
    disabled={!isFormated}
    onClick={handleLogin}

    />  
    </div>
    </Tooltip>
    <RedirectInfo  
     text=""
      redirectText='Already have an account?' 
       additionalStyles={{marginTop:'5px'}}
       redirectHandler={handlePushToLoginPage}
       
       
       />

    </>

  )
}
