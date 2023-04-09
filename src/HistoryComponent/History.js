import React from "react";
import { Box } from "@mui/material";
import Link from "@mui/material/Link";
import ApplicationStatus from  "../ApplicationStatus/ApplicationStatus"
import RequestStatus from "../RequestStatus/RequestStatus";
import { useState } from "react";

export default function History() {
  const [appStatus,setappStatus] = useState(false)
  const [reqStatus,setreqStatus] = useState(false)
  // const [clicked, setClicked] = useState(false)
  
  
  




  const AppstatusView = (event) =>{
    event.preventDefault()
    setappStatus(true)
    setreqStatus(false)
    // setClicked(true)
    
  }
  const ReqstatusView = (event) =>{
    event.preventDefault()
    setreqStatus(true)
    setappStatus(false)
    

    
  }

  const textDecoration = appStatus ? 'underline' : 'none';


  return (
    <Box
    // border={5}
    // height={200}
    display="flex"
    gap={2}
    
    >
      <Box
      display="flex"
      flexDirection="column"
      borderRight={3}
      height={180}
      width={180}
      paddingLeft={40}
      whiteSpace="nowrap"
      style={{ borderColor: '#D3D3D3' }}
      >
      <Link
        onClick={AppstatusView}
        href=""
        
        sx={{
        textDecoration: 'none', 
        color: "black",
        }}
        style={{ textDecoration }}
      >
        Application Status
      </Link>
      <Link 
        onClick={ReqstatusView}
        href="" 
       
        sx={{
        textDecoration: 'none', 
        color: "black",
         padding: 2,
         paddingRight:5 
        }}
        // style={{ textDecoration }}
        >
        Request Status
      </Link>
      </Box>


      <Box
      >
           {
            appStatus? <ApplicationStatus/>:""
           }
      </Box>
      <Box
      >
           {
            reqStatus? <RequestStatus/>:""
           }
      </Box>

      
    </Box>
  );
}
