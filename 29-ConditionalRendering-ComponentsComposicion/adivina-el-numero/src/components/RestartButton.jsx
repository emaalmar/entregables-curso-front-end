import Button from '@mui/material/Button';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const RestartButton = ({ onReiniciar }) => {
    return (
        <Button
            variant="contained"
            color="secondary"
            startIcon={<RestartAltIcon />}
            onClick={onReiniciar}
        >
            Reiniciar juego
        </Button>
    );
};

export default RestartButton;
