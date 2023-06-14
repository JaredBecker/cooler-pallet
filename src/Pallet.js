import { Component } from "react";

import ColorBox from "./ColorBox";

import './Pallet.css';
import Navbar from "./Navbar";

class Pallet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex',
        };
        this.changeLevel = this.changeLevel.bind(this);
        this.changeColorFormat = this.changeColorFormat.bind(this);
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeColorFormat(format) {
        this.setState({ format });
    }

    render() {
        const { colors } = this.props.pallet;
        const { level, format } = this.state;

        const colorBoxes = colors[level].map(color => {
            return <ColorBox background={color[format]} name={color.name} />
        });

        return (
            <div className="Pallet">
                <Navbar
                    level={level}
                    format={format}
                    changeLevel={this.changeLevel}
                    handleChange={this.changeColorFormat}
                />
                <div className="Pallet-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Pallet;
