# Expense Tracker

An easy-to-use **Expense Tracker** web application to help you track your daily expenses and manage finances. This project includes a backend (using Node.js, Express, and MySQL) and a frontend (HTML, CSS, and JavaScript).

## Features

- Add, view, and delete expenses.
- Track expenses by name, amount, and date.
- Currency displayed in **Indian Rupees** (₹).
- User-friendly interface to manage your spending.
  
## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Database:** MySQL

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **MySQL** (with the `expense_tracker` database)

### Backend Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/K-Shantanu/Expense-Tracker.git
   cd Expense-Tracker
Install the backend dependencies:

bash
Copy code
cd Backend
npm install
Configure the MySQL database:

Create a MySQL database named expense_tracker.
Create a table expenses with the following structure:
sql
Copy code
CREATE TABLE expenses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    date DATE NOT NULL
);
Update the Backend/app.js file with your MySQL connection details:

js
Copy code
const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',  // Replace with your username
  password: 'your_mysql_password',  // Replace with your password
  database: 'expense_tracker'
});
Run the backend server:

bash
Copy code
node app.js
The backend will start running on port 3000.

Frontend Setup
Navigate to the Frontend folder:

bash
Copy code
cd ../Frontend
Open the index.html file in a browser.

Running the Application
The frontend will interact with the backend running on http://localhost:3000.
You can now add, view, and delete expenses from the interface.
Screenshots

License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements

Express.js
MySQL
Node.js
