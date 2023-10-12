const alertAction={
    OPEN_ALERT_MESSAGE:"ALERT.OPEN_ALERT_MESSAGE",
    CLOSE_ALERT_MESSAGE:"ALERT.CLOSE_ALERT_MESSAGE"
}


export const getAction=(dispatch)=>{
    return{
        openAlertMessage:(content)=>dispatch(openAlertMessage(content)),
        closeAlertMessage:()=>dispatch(closeAlertMessage())
    }
}
export const openAlertMessage=(content)=>{
    return{
        type:alertAction.OPEN_ALERT_MESSAGE,
        content
    }


}
export const closeAlertMessage=()=>{
    return{
        type:alertAction.CLOSE_ALERT_MESSAGE,
    }


}

export default alertAction;