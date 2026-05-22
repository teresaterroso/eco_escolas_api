// create a simple API REST server with express for a generic route to test RASP communication with the WAF
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/test', (req, res) => {
    // log request verb, URL and body
    console.log(`Received ${req.method} request to ${req.url} with body:`, req.body);
    res.json({ message: 'Hello from the API!' });
});

app.listen(PORT, HOST, () => {
    console.log(`Server running on http://${HOST}:${PORT}`);
});