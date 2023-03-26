import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // what api uses


const app = express();
app.use(bodyParser.json()); //parses json data from frontend
app.use(cors()); //CORS allows frontend to make requests to backend

// Add a new route handler for the root path
app.get('/', (req, res) => {
    res.send('Welcome to the server!');
  });

// gets sample data from the api
app.get('/api/data', (req, res) =>{
    res.json("hello world!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

