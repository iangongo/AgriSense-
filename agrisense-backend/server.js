// server.js

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// MySQL Connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'agrisense_user',  // Replace with your MySQL username
    password: 'password',  // Replace with your MySQL password
    database: 'agri_sense'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Example route - get crop health data
app.get('/api/crop_monitoring', (req, res) => {
    connection.query('SELECT * FROM crop_health_data', (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error retrieving crop health data');
            return;
        }
        res.json(results);
    });
});

// Example route - update crop health data
app.post('/api/crop_monitoring', (req, res) => {
    const { field_id, moisture_level, disease_status } = req.body;
    const query = `INSERT INTO crop_health_data (field_id, moisture_level, disease_status) VALUES (${field_id}, ${moisture_level}, '${disease_status}')`;
    
    connection.query(query, (error, results, fields) => {
        if (error) {
            console.error('Error executing query:', error);
            res.status(500).send('Error updating crop health data');
            return;
        }
        res.send('Crop health data updated successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

