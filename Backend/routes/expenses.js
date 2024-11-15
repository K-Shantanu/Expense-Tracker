const express = require('express');
const router = express.Router();
const db = require('../db');  // Assuming your MySQL connection is in a db.js file

// Get all expenses
router.get('/expenses', (req, res) => {
    const query = 'SELECT * FROM expenses';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching expenses:', err);
            return res.status(500).json({ error: 'Failed to fetch expenses' });
        }
        res.json(results);
    });
});

// Add an expense
router.post('/expenses', (req, res) => {
    const { name, amount, date } = req.body;

    if (!name || !amount || !date) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const query = 'INSERT INTO expenses (name, amount, date) VALUES (?, ?, ?)';
    db.query(query, [name, amount, date], (err, result) => {
        if (err) {
            console.error('Error adding expense:', err);
            return res.status(500).json({ error: 'Failed to add expense' });
        }
        res.status(201).json({ message: 'Expense added successfully', expenseId: result.insertId });
    });
});

// Delete an expense
router.delete('/expenses/:id', (req, res) => {
    const expenseId = req.params.id;
    const query = 'DELETE FROM expenses WHERE id = ?';
    db.query(query, [expenseId], (err, result) => {
        if (err) {
            console.error('Error deleting expense:', err);
            return res.status(500).json({ error: 'Failed to delete expense' });
        }
        res.json({ message: 'Expense deleted successfully' });
    });
});

module.exports = router;
