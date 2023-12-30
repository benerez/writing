// app.js

// Require Express and Path
const express = require('express');
const path = require('path');

// Initialize Express App
const app = express();

// Define a Port
const PORT = process.env.PORT || 3000;

// Serve Static Files (Optional at this stage, but good practice)
app.use(express.static(__dirname)); // Serve static files from the root directory

// Root Route to serve index.html from the root directory
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html')); // Serve index.html from the root directory
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
