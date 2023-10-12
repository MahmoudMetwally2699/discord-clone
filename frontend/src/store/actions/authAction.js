import * as api from "../../api"
import { openAlertMessage } from './alertAction'; // Import your action creators


export const authAction={
    SET_USER_DETAILS:"AUTH.SET_USER_DEATILS"
}

const setUserDetails=(userDetails)=>{
    return{
        type:authAction.SET_USER_DETAILS,
        userDetails
    }
}

export const getAction=(dispatch)=>{
    return{
        login:(userDetails,Navigate)=>dispatch(login(userDetails,Navigate)),
        register:(userDetails,Navigate)=>dispatch(register(userDetails,Navigate))
    }
}

export const login=(userDetails,Navigate)=>{
    return async(dispatch)=>{
        const response=await api.login(userDetails)
        if (response.error) {
            console.log(response)
            dispatch(openAlertMessage(response?.error?.response?.data))
          
        }
        else{
            const {userDetails}=response.data;
            localStorage.setItem("user",JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            Navigate("/dashboard");

        }
    }
}
export const register=(userDetails,Navigate)=>{
    return async(dispatch)=>{
        const response=await api.register(userDetails)
        if (response.error) {
            dispatch(openAlertMessage(response?.error?.response?.data))

        }
        else{
            const {userDetails}=response.data;
            localStorage.setItem("user",JSON.stringify(userDetails));
            dispatch(setUserDetails(userDetails));
            Navigate("/dashboard");

        }
    }
}

