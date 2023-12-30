// app.js

// Require Express and Path
const express = require('express');
const path = require('path');

// Initialize Express App
const app = express();

// Define a Port
const PORT = process.env.PORT || 3000;

// Serve Static Files (Optional at this stage, but good practice)
app.use(express.static('views'));

// Root Route to serve index.html from views directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html')); // Serve index.html
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
