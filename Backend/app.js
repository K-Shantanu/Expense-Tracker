const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// Use middleware
app.use(cors());
app.use(bodyParser.json());

// Create MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'kumar',
    password: '27957790',
    database: 'expenses_tracker'
});

// Test DB connection
connection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to the database');
});

// Get all expenses
app.get('/expenses', (req, res) => {
    connection.query('SELECT * FROM expenses', (err, results) => {
        if (err) {
            return res.status(500).send('Error fetching expenses');
        }
        res.json(results);
    });
});

// Add a new expense
app.post('/expenses', (req, res) => {
    const { name, amount, date } = req.body;
    connection.query('INSERT INTO expenses (name, amount, date) VALUES (?, ?, ?)', [name, amount, date], (err, results) => {
        if (err) {
            return res.status(500).send('Error adding expense');
        }
        res.json({ id: results.insertId, name, amount, date });
    });
});

// Delete an expense
app.delete('/expenses/:id', (req, res) => {
    const { id } = req.params;
    connection.query('DELETE FROM expenses WHERE id = ?', [id], (err, results) => {
        if (err) {
            return res.status(500).send('Error deleting expense');
        }
        res.json({ message: 'Expense deleted' });
    });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
