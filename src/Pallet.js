import { useState } from 'react';

import ColorBox from './ColorBox';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './Pallet.css';
import Navbar from './Navbar';

const Pallet = (props) => {
    const { colors, palletName, emoji } = props.pallet;

    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');
    const [showSnackBar, setShowSnackBar] = useState(false);

    const colorBoxes = colors[level].map(color => {
        return <ColorBox
            key={color.id}
            background={color[format]}
            name={color.name}
        />
    });

    return (
        <div className='Pallet'>
            <Navbar
                level={level}
                format={format}
                changeLevel={setLevel}
                handleFormatChange={setFormat}
            />
            <div className='Pallet-colors'>
                {colorBoxes}
            </div>
            <footer className='Pallet-footer'>
                {palletName}
                <span className='emoji'>{emoji}</span>
            </footer>

            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                open={showSnackBar}
                autoHideDuration={3000}
                message={<span id='message-id'>Format changed to {format.toUpperCase()}</span>}
                ContentProps={{ 'aria-describedby': 'message-id' }}
                onClose={() => setShowSnackBar(false)}
                action={[
                    <IconButton onClick={() => setShowSnackBar(false)}>
                        <CloseIcon
                            color='inherit'
                            aria-label='close'
                        />
                    </IconButton>
                ]}
            />
        </div>
    );
}

export default Pallet;
