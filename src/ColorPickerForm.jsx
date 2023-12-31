import React, { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import "./assets/styles/ColorPickerForm.css";

export default function ColorPickerForm({ paletteIsFull, colors, addNewColor }) {
    const [currentColor, setCurrentColor] = useState("#EF5959");
    const [newColorName, setNewColorName] = useState("");

    useEffect(() => {
        ValidatorForm.addValidationRule("isColorNameUnique", (value) => {
            return colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase());
        });

        ValidatorForm.addValidationRule("isColorUnique", () => {
            return colors.every(({ color }) => color.toLowerCase() !== currentColor.toLowerCase());
        });
    });

    const updateCurrentColor = (color) => setCurrentColor(color.hex);
    const handleChange = (e) => setNewColorName(e.target.value);

    const handleSubmit = () => {
        const newColor = {
            color: currentColor,
            name: newColorName,
        };

        addNewColor(newColor);
        setNewColorName("");
    };

    return (
        <div>
            <ChromePicker
                className="CPF-picker"
                color={currentColor}
                onChangeComplete={updateCurrentColor}
            />
            <ValidatorForm
                autoComplete="off"
                onSubmit={handleSubmit}
                instantValidate={false}
            >
                <TextValidator
                    id="filled-error-helper-text"
                    label="Color Name"
                    value={newColorName}
                    className="CPF-colorNameInput"
                    name="newColorName"
                    variant="filled"
                    margin="normal"
                    onChange={handleChange}
                    validators={[
                        "required",
                        "isColorNameUnique",
                        "isColorUnique",
                    ]}
                    errorMessages={[
                        "Color name is required",
                        "Name must be unique",
                        "You already used this color",
                    ]}
                />
                <Button
                    variant="contained"
                    color="primary"
                    className="CPF-addColor"
                    type="submit"
                    disabled={paletteIsFull}
                    style={{backgroundColor: paletteIsFull ? "grey" : currentColor}}
                >
                    {paletteIsFull ? "Palette Full" : "Add Color"}
                </Button>
            </ValidatorForm>
        </div>
    );
}
