import Pallet from './Pallet';
import seedColors from './seedColors';
import { generatePallet } from './ColorHelpers';
import { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div>
                <Pallet pallet={generatePallet(seedColors[4])} />
            </div>
        );
    }
}

export default App;
