const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const userId = "snehapandey_21BEC1191"; // Example user ID

// POST endpoint
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, message: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));
    const highestLowercase = alphabets.filter(item => item === item.toLowerCase());
    const highestLowercaseAlphabet = highestLowercase.length > 0 ? [highestLowercase.sort().pop()] : [];

    res.json({
        is_success: true,
        user_id: userId,
        email: "sneha.pandey2021@vitstudent.ac.in",
        roll_number: "21BEC1191node server.js
",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
