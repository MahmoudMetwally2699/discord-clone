export  const validateLoginForm=({mail,password})=>{
    const isMailVaild=validatEmail(mail);
    const isPasswordVaild=validatePasword(password);

    return isMailVaild && isPasswordVaild



}
export  const validateRegisterForm=({mail,password,username})=>{
    const isMailVaild=validatEmail(mail);
    const isPasswordVaild=validatePasword(password);
    const isUsernameVaild=validateUsername(username);

    return isMailVaild && isPasswordVaild && isUsernameVaild



}


const validatEmail=(mail)=>{
    const emailPattern=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    return emailPattern.test(mail);
}
const validatePasword=(password)=>{
    return password.length > 6 && password.length < 13
  
}
const validateUsername=(password)=>{
    return password.length > 2 && password.length < 13
  
}