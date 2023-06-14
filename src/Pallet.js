import { Component } from "react";

import ColorBox from "./Colorbox";

import './Pallet.css';
import Navbar from "./Navbar";

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
                <Navbar level={level} changeLevel={this.changeLevel} />
                <div className="Pallet-colors">
                    { colorBoxes }
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Pallet;
