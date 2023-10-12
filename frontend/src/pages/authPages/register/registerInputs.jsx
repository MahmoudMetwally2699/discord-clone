import React from 'react'
import InputWithLabel from './../../../components/inputWithLabel';

export default function loginInputs({mail,setmail,password,setpassword,username,setusername}) {
  return (
    <>
    <InputWithLabel
    value={mail}
    setValue={setmail}
    label="E-mail"
    type="text"
    placeholder="Enter e-mail address" 
    />
    <InputWithLabel
    value={username}
    setValue={setusername}
    label="Username"
    type="text"
    placeholder="Enter username"  
    />
    <InputWithLabel
    value={password}
    setValue={setpassword}
    label="Password"
    type="password"
    placeholder="Enter Password" 
    />
    </>
  )
}
