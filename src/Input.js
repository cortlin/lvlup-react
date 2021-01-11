import { useState } from 'react';

export const Input = () => {

    const [ inputValue, setInputValue ] = useState('');

    return (
        <div>
            <h3>{inputValue}</h3>
            <input
                value={inputValue}
                type="text"
                onChange={(event) => {
                    if(!event.target.value.includes('t')){
                        setInputValue(event.target.value)
                    }
                }}
            />
        </div>
    )
}