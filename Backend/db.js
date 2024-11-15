const mysql = require('mysql2');

// Create a connection to the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'kumar',
    password: '27957790',
    database: 'expense_tracker'
});

// Test the connection
db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});

module.exports = db;