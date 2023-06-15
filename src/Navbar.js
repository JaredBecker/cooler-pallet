import React from 'react';

import Slider from 'rc-slider';
import { Select, MenuItem } from '@mui/material';

import 'rc-slider/assets/index.css';
import './Navbar.css';

const Navbar = ({ level, changeLevel, format, handleFormatChange }) => {
    function changeFormat(e) {
        handleFormatChange(e.target.value);
    }

    return (
        <header className='Navbar'>
            <div className='logo'>
                <a href='#'>CoolerPallet</a>
            </div>
            <div className='slider-container'>
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider
                        min={100}
                        max={900}
                        step={100}
                        defaultValue={level}
                        onChange={changeLevel}
                    />
                </div>
            </div>
            <div className='select-container'>
                <Select variant="standard" value={format} onChange={changeFormat}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - (0, 0, 0)</MenuItem>
                    <MenuItem value="rgba">RGBA - (0, 0, 0, 1.0)</MenuItem>
                </Select>
            </div>
        </header>
    );
}

export default Navbar;
