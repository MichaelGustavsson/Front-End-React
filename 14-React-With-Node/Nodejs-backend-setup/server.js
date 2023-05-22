const express = require('express');
const axios = require('axios');

// Hämta express, instansiera express.
const app = express();

const PORT = 5020;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
