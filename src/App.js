import Pallet from './Pallet';
import seedColors from './seedColors'

function App() {
    return (
        <div>
            <Pallet {...seedColors[4]} />
        </div>
    );
}

export default App;
