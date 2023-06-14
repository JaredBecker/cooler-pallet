import Pallet from './Pallet';
import seedColors from './seedColors';
import { generatePallet } from './ColorHelpers';
import { Component } from 'react';

class App extends Component {
    render() {
        console.log(generatePallet(seedColors[4]));
        return (
            <div>
                <Pallet {...seedColors[4]} />
            </div>
        );
    }
}

export default App;
