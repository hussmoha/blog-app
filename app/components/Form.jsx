import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Form() {
  return (
    
   <>
   <TextField
   
    multiline
    rows={6} 
    variant="filled"
    fullWidth 
    sx={{
      
      fontSize: '1.25rem', 
      '.MuiInputBase-inputMultiline': { // Targeting the multiline input specifically
        minHeight: '150px', // Minimum height for the input
      },
    }}
  /> 

  <Button className="bg-zinc-900 text-white py-2 px-5 rounded-md mt-10">Add</Button>
      
  </>
  );
}
