import React, { useState } from "react";
import { Link } from "react-router-dom";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./assets/styles/Navbar.css";

import Logo from './assets/images/logo.png';

export default function Navbar({ level, changeLevel, showSlider, handleChange }) {
    const [format, setFormat] = useState("hex");
    const [open, setOpen] = useState(false);

    const closeSnackbar = () => setOpen(false);

    const handleFormatChange = (e) => {
        setFormat(e.target.value, setOpen(true));
        handleChange(e.target.value);
    };

    return (
        <header className="Navbar">
            <div className="logo">
                <Link to="/">
                    <img src={Logo} alt="Cooler Palette Logo" />
                </Link>
            </div>
            {showSlider && (
                <div className="slider-container">
                    <span>Level: {level}</span>
                    <div className="slider">
                        <Slider
                            defaultValue={level}
                            min={100}
                            max={900}
                            step={100}
                            onChange={changeLevel}
                        />
                    </div>
                </div>
            )}
            <div className="select-container">
                <Select value={format} onChange={handleFormatChange} variant="standard">
                    <MenuItem value="hex">HEX - #1234EF</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">
                        RGBA - rgba(255, 255, 255, 1.0)
                    </MenuItem>
                </Select>
            </div>
            <Snackbar
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                open={open}
                autoHideDuration={3000}
                message={
                    <span id="message-id">
                        Format Changed To {format.toUpperCase()}
                    </span>
                }
                ContentProps={{ "aria-describedby": "message-id" }}
                onClose={closeSnackbar}
                action={[
                    <IconButton
                        onClick={closeSnackbar}
                        color="inherit"
                        key="close"
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        </header>
    );
}
