import React, {useState} from 'react';
import './App.css';
import {PasswordInput} from "./PasswordField";

function App() {
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <div className="App">
            <PasswordInput
                label="Password"
                placeholder="Placeholder"
                value={inputValue}
                onChange={setInputValue}
            />
        </div>
    );
}

export default App;
