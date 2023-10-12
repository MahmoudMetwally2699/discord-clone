import alertAction from "../actions/alertAction";

const initState={
    showAlertMessage:false,
    alertMessageContent:null,
}

const reducer=(state=initState,action)=>{
    switch(action.type){
        case alertAction.OPEN_ALERT_MESSAGE:
            return{
                ...state,
                showAlertMessage:true,
                alertMessageContent:action.content,
            };
        case alertAction.CLOSE_ALERT_MESSAGE:
            return{
                ...state,
                showAlertMessage:false,
                alertMessageContent:null,
            };

        default:
            return state;
    }
}
export default reducer