import React, { useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

import { DRAWER_WIDTH } from "./constants";
import PaletteMetaForm from "./PaletteMetaForm";

import "./assets/styles/PaletteFormNav.css";

const drawerWidth = DRAWER_WIDTH;

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== "open" })
    (({ theme, open }) => ({
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));

export default function PaletteFormNav({
    open,
    handleDrawerOpen,
    palettes,
    newPaletteName,
    setNewPaletteName,
    handleSubmit,
}) {
    const [formShowing, setFormShowing] = useState(false);

    const showForm = () => setFormShowing(true);
    const hideForm = () => setFormShowing(false);

    return (
        <Box className="PaletteFormNav">
            <CssBaseline />
            <AppBar
                className="PFN-appBar"
                position="fixed"
                open={open}
                color="default"
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <AddToPhotosIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Create New Palette
                    </Typography>
                </Toolbar>
                <div className="PFNav-navBtns">
                    <Link to="/">
                        <Button
                            className="button"
                            variant="contained"
                            color="secondary"
                        >
                            Go Back
                        </Button>
                    </Link>
                    <Button
                        className="button"
                        variant="contained"
                        color="primary"
                        onClick={showForm}
                    >
                        Save
                    </Button>
                </div>
            </AppBar>
            {() => {
                if (formShowing) {
                    <PaletteMetaForm
                        palettes={palettes}
                        newPaletteName={newPaletteName}
                        setNewPaletteName={setNewPaletteName}
                        handleSubmit={handleSubmit}
                        hideForm={hideForm}
                    />
                }
            }}
        </Box>
    );
}
