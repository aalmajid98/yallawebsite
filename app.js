import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // what api uses


const app = express();
app.use(bodyParser.json()); //parses json data from frontend
app.use(cors()); //CORS allows frontend to make requests to backend

//Gets all static files from the public folder
//app.use(express.static('public'));

// gets sample data from the api
app.get('/api/data', (req, res) =>{
    res.json("hello world!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

