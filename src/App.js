import React from 'react';

import Pallet from './Pallet';

import seedColors from './seedColors';
import { generatePallet } from './ColorHelpers';
import { useParams } from 'react-router-dom';

const App = () => {
    const {id} = useParams();
    const findPallet = (id) => seedColors.find((el) => el.id === id);

    return (
        <div>
            <Pallet pallet={generatePallet(findPallet(id))} />
        </div>
    );
}

export default App;
