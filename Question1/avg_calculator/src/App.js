const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9876;

app.use(bodyParser.json());

const windowSize = 10;
let storedNumbers = [];

// Function to fetch numbers from the third-party server based on type
async function fetchNumbers(type) {
    const response = await axios.get(`http://20.244.56.144/test/${type}`);
    return response.data.numbers;
}

// Function to calculate average of an array of numbers
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Endpoint to handle requests for number types
app.get('/numbers/:type', async (req, res) => {
    const type = req.params.type;

    try {
        // Fetch numbers from third-party server
        const fetchedNumbers = await fetchNumbers(type);
        
        // Filter out duplicates and ensure uniqueness
        const uniqueNumbers = fetchedNumbers.filter(num => !storedNumbers.includes(num));
        
        // Ignore numbers taking longer than 500ms
        if (uniqueNumbers.length === 0) {
            res.status(500).send('No new unique numbers found.');
            return;
        }

        // Update storedNumbers array
        storedNumbers = storedNumbers.concat(uniqueNumbers).slice(-windowSize);

        // Calculate average if storedNumbers exceeds window size
        const avg = storedNumbers.length >= windowSize ? calculateAverage(storedNumbers) : null;

        // Prepare response
        const response = {
            windowPrevState: storedNumbers.slice(0, -uniqueNumbers.length),
            windowCurrState: storedNumbers,
            numbers: uniqueNumbers,
            avg: avg !== null ? avg.toFixed(2) : null
        };

        res.json(response);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
