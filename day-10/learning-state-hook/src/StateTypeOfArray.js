import { useState } from 'react';

function StateTypeOfArray() {
    const [fruits, setFruits] = useState(['banana', 'apple', 'kiwi']);

    return (
        <div>
            <ul>
                {fruits.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <button onClick={() => setFruits([...fruits, 'strawberry'])}>
                Add Fruit
            </button>
        </div>
    );
}

export { StateTypeOfArray };