const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import cors middleware

const app = express();
const port = process.env.PORT || 3001;
const API_KEY = process.env.API_KEY;

// Use cors middleware
app.use(cors());

app.get("/productivity-news", async (req, res) => {
  try {
    const keyword = 'productivity';
    const response = await fetchNewsData(keyword);
    res.json(response);
  } catch (error) {
    console.error('Error fetching crypto news:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get("/tech-hacks-news", async (req, res) => {
  try {
    const keyword = 'tech hacks';
    const response = await fetchNewsData(keyword);
    res.json(response);
  } catch (error) {
    console.error('Error fetching tech hacks news:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

async function fetchNewsData(keyword) {
  try {
    const response = await axios.get(`https://newsapi.in/newsapi/search.php?key=${API_KwEY}&q=${keyword}`);
    return response.data;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}

const server = app.listen(port, () => console.log(`Server listening on port ${port}`));

// Set timeouts (optional, based on your requirements)
server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;