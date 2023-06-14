import { Component } from 'react';

import ColorBox from './ColorBox';
import { IconButton, Snackbar } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import './Pallet.css';
import Navbar from './Navbar';

class Pallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
            showSnackBar: false,
        };

        this.changeLevel = this.changeLevel.bind(this);
        this.changeColorFormat = this.changeColorFormat.bind(this);
        this.closeSnackBar = this.closeSnackBar.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeColorFormat(format) {
        this.setState({ format, showSnackBar: true });
    }

    closeSnackBar() {
        this.setState({ showSnackBar: false });
    }

    render() {
        const { colors, palletName, emoji } = this.props.pallet;
        const {
            level,
            format,
            showSnackBar,
        } = this.state;

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
                    changeLevel={this.changeLevel}
                    handleFormatChange={this.changeColorFormat}
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
                    onClose={this.closeSnackBar}
                    action={[
                        <IconButton onClick={this.closeSnackBar}>
                            <CloseIcon
                                color='inherit'
                                aria-label='close'
                            />
                        </IconButton>
                    ]}
                />
            </div>
        )
    }
}

export default Pallet;
