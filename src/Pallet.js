import { Component } from "react";
import ColorBox from "./Colorbox";
import './Pallet.css';

class Pallet extends Component {
    render() {
        console.log(this.props);
        const colorBoxes = this.props.colors.map(color => {
            return <ColorBox background={color.color} name={color.name} />
        });

        return (
            <div className="Pallet">
                {/* Navbar goes here */}
                <div className="Pallet-colors">
                    {colorBoxes}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Pallet;
