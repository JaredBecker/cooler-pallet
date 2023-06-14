import React, { Component } from 'react';

import Slider from 'rc-slider';
import { Select, MenuItem } from '@mui/material';

import 'rc-slider/assets/index.css';
import './Navbar.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.handleChange(e.target.value);
    }

    render() {
        const { level, changeLevel, format } = this.props;
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
                    <Select variant="standard" value={format} onChange={this.handleChange}>
                        <MenuItem value="hex">HEX - #ffffff</MenuItem>
                        <MenuItem value="rgb">RGB - (0, 0, 0)</MenuItem>
                        <MenuItem value="rgba">RGBA - (0, 0, 0, 1.0)</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;
