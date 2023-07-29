import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import {createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
const normalise = (value) => ((value - 0) * 100) / (100 - 0);
function ProgressBar(props) {
  const theme = createMuiTheme({
   palette: {
      secondary: {
          main: '#42baf5'
      }
   }
 });
  return (
    <div className="w-[57rem]">
        <MuiThemeProvider theme={theme}>
            <LinearProgress  sx={{
                  backgroundColor: '#EFEFEF',
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: '#FF764A'
                  },
                  height:"8px",
                  borderRadius:"20px"
                }}
                variant="determinate"
                 value={normalise(props.value)}/> 
          </MuiThemeProvider>
    
    </div>
  );
}

export default ProgressBar;
