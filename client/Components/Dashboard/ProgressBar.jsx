import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
import { createTheme, ThemeProvider } from "@mui/material/styles";
const normalise = (value) => ((value - 0) * 100) / (100 - 0);
function ProgressBar(props) {
  const theme = createTheme({
   palette: {
      secondary: {
          main: '#42baf5'
      }
   }
 });
  return (
    <div className="w-[57rem]">
        <ThemeProvider theme={theme}>
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
          </ThemeProvider>
    
    </div>
  );
}

export default ProgressBar;
