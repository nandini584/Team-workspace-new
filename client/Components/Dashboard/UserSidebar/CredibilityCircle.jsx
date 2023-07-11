import React from 'react'
import { sizing } from '@mui/system';
import CircularProgress from '@mui/material/CircularProgress';
const normalise = (value) => ((value - 0) * 100) / (100 - 0);
const CredibilityCircle = (props) => {

  return (
    <div>
    <React.Fragment>
      <CircularProgress sx={{ width: 130 }} style={{color: "#FF764A", size: "130px"}} variant="determinate" value={normalise(props.value)} />
    </React.Fragment>
    </div>
  )
}

export default CredibilityCircle