/*  const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Enable CORS so your HTML file can talk to this server
app.use(cors());
app.use(express.json());

// Connect to the SQLite database file created in Step 1
const db = new sqlite3.Database('./space.db', (err) => {
    if (err) console.error("Database connection error:", err.message);
    else console.log("Connected to the Interstellar SQLite database.");
});

// API Route to fetch all planets and probes
app.get('/api/planets', (req, res) => {
    const sql = "SELECT * FROM planets";
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.json(rows);
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`
    =====================================================
    SERVER ACTIVE: http://localhost:${PORT}
    1. Run Step 1 (database.js) first to create the data.
    2. Open your Dashboard (index.html) in your browser.
    =====================================================
    `);
});  */