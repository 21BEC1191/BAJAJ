import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const [selectedOptions, setSelectedOptions] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const jsonData = JSON.parse(input);
            const res = await axios.post('https://testbfhl.herokuapp.com/bfhl', jsonData);
            setResponse(res.data);
            setError('');
        } catch (err) {
            setError('Invalid JSON input');
        }
    };

    const handleSelectChange = (e) => {
        const options = Array.from(e.target.selectedOptions).map(option => option.value);
        setSelectedOptions(options);
    };

    return (
        <div>
            <h1>ABCD123</h1>
            <form onSubmit={handleSubmit}>
                <textarea value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter JSON here' />
                <button type='submit'>Submit</button>
            </form>
            {error && <p>{error}</p>}
            {response && (
                <div>
                    <select multiple onChange={handleSelectChange}>
                        <option value="numbers">Numbers</option>
                        <option value="alphabets">Alphabets</option>
                        <option value="highest_lowercase_alphabet">Highest Lowercase Alphabet</option>
                    </select>
                    <div>
                        {selectedOptions.includes('numbers') && <p>Numbers: {JSON.stringify(response.numbers)}</p>}
                        {selectedOptions.includes('alphabets') && <p>Alphabets: {JSON.stringify(response.alphabets)}</p>}
                        {selectedOptions.includes('highest_lowercase_alphabet') && <p>Highest Lowercase Alphabet: {JSON.stringify(response.highest_lowercase_alphabet)}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
