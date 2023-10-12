import React from 'react'
import Alert from '@mui/material/Alert'
import  {Snackbar}  from '@mui/material'
import { useDispatch,useSelector } from 'react-redux';
import { closeAlertMessage } from './../store/actions/alertAction';



export default function AlertNotification() {
  const dispatch=useDispatch();
  const alertContent=useSelector((state)=>state.alert.alertMessageContent)
  const show=useSelector((state)=>state.alert.showAlertMessage)

 
  return (
    <Snackbar 
    anchorOrigin={{vertical:"bottom",horizontal:"center"}}
    open={show}
    onClose={()=>{ dispatch(closeAlertMessage())}}
    autoHideDuration={4000}

    >
        <Alert severity='info'>{alertContent}</Alert>

    </Snackbar>
  )
}
