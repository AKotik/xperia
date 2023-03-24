import React from 'react';
import { styled } from '@mui/material/styles';
import { MenuItem, Select } from '@mui/material';

const CustomSelect = styled((props) => <Select {...props} >
  {props.items && props.items.map(item=>{
   return (<MenuItem value={item}>{item}</MenuItem>)
  })}
</Select>)(({ theme }) => ({
  '& .MuiSelect-select': {
    color: '#767e89',width:"100%"
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: `${theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#dee3e9'}`,
  },
  '& .MuiSelect-select::-webkit-input-placeholder': {
    color: '#767e89',
    opacity: '1',
    
  },
}));

export default CustomSelect;
