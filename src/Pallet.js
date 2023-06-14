import { Component } from "react";

import Slider from 'rc-slider';

import ColorBox from "./Colorbox";

import 'rc-slider/assets/index.css';
import './Pallet.css';

class Pallet extends Component {
    constructor(props) {
        super(props);
        this.state = { level: 500 };
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    render() {
        const { colors } = this.props.pallet;
        const { level } = this.state;

        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color.hex} name={color.name} />
        });

        return (
            <div className="Pallet">
                {/* Navbar goes here */}
                <div className="slider">
                    <Slider
                        min={100}
                        max={900}
                        step={100}
                        defaultValue={level}
                        onChange={this.changeLevel}
                    />
                </div>
                <div className="Pallet-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Pallet;
