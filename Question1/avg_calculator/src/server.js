const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9876;

app.use(bodyParser.json());

const windowSize = 10;
let storedNumbers = [];

    
async function fetchNumbers(type) {
    const response = await axios.get(`http://20.244.56.144/test/${type}`);
    return response.data.numbers;
}


function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}


app.get('/numbers/:type', async (req, res) => {
    const type = req.params.type;

    try {
        
        const fetchedNumbers = await fetchNumbers(type);
        
       
        const uniqueNumbers = fetchedNumbers.filter(num => !storedNumbers.includes(num));
        
       
        if (uniqueNumbers.length === 0) {
            res.status(500).send('No new unique numbers found.');
            return;
        }

        
        storedNumbers = storedNumbers.concat(uniqueNumbers).slice(-windowSize);

       
        const avg = storedNumbers.length >= windowSize ? calculateAverage(storedNumbers) : null;

        
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
