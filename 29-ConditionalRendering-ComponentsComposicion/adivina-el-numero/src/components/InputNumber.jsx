import React from 'react'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const InputNumber = ({ value, onChange }) => {
    return (
        <input
    <Box sx={{ mb: 2 }}>
      <TextField
        label="Adivina un número"
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        fullWidth
      />
    </Box>
    )
}

export default InputNumber