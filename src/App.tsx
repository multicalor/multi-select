import React from 'react';
import MultiSelect from "./components/UI/multiSelect";

const App = () => {
    return (
        <div>

            <h1>Работает</h1>
            <MultiSelect height='200px' width='300px'/>
                <button>Кнопка</button>
                <MultiSelect/>
        </div>
    );
};

export default App;

//rsc - create new component