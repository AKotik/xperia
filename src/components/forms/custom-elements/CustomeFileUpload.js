import { Button } from '@mui/material';
import React from 'react';
 

const CustomFileUpload =  (props)=>{
    return(
        <Button
  variant="contained"
  component="label"
>
  Upload File
  <input
    {...props}
    type="file"
    hidden
  />
</Button>
    )
}

export default CustomFileUpload;
