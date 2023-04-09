import React from "react";
import { Box, Link, Typography } from "@mui/material";

export default function ApplicationStatus() {
  return (
    <Box
    display="flex"
    gap={5}
    alignItems='center'
    

    >
            <Box>
             <Typography>3/22/2023,</Typography>
             <Typography>11:37:44 am</Typography>
            </Box>
            <Box>
            <Typography>
            <span style={{ fontWeight: 'bold' }}> Submitted</span> New Business License Application <span style={{ fontWeight: 'bold' }}>John.honai</span>
            </Typography>
            </Box>
            <Box>
            <Link
             sx={{ 
                
                color: "black", 
                textDecorationColor:"black",
                
                
              }}
              style={{fontSize: '12px'}}>
                View Submission</Link>
            </Box>
    </Box>
  )
}
