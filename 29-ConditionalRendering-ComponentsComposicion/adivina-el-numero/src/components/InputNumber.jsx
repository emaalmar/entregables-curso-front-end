import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const InputNumber = ({ value, onChange }) => {
    return (
        <Box sx={{ mb: 2 }}>
            <TextField
                label="Elige entre el 1 y 100"
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                fullWidth
            />
        </Box>
    );
};

export default InputNumber;