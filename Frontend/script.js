// Load Expenses from the database
function loadExpenses() {
    fetch('http://localhost:3000/api/expenses')
        .then(response => response.json())
        .then(expenses => {
            const expenseList = document.getElementById('expenses');
            expenseList.innerHTML = '';  // Clear the current list

            // Display the expenses
            expenses.forEach(expense => {
                const li = document.createElement('li');
                li.innerHTML = `${expense.name} - $${expense.amount} - ${expense.date}
                                <button onclick="editExpense(${expense.id})">Edit</button>
                                <button onclick="deleteExpense(${expense.id})">Delete</button>`;
                expenseList.appendChild(li);
            });
        })
        .catch(err => console.error('Error:', err));
}

// Initialize by loading the expenses
loadExpenses();

// Add an Expense
document.getElementById('expense-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const newExpense = {
        name: document.getElementById('name').value,
        amount: document.getElementById('amount').value,
        date: document.getElementById('date').value
    };

    fetch('http://localhost:3000/api/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newExpense)
    })
    .then(response => {
        if (!response.ok) {
            console.log('Failed to add expense');
            throw new Error('Failed to add expense');
        }
        return response.json();
    })
    .then(data => {
        alert('Expense added');
        loadExpenses();  // Reload the expenses list
    })
    .catch(err => {
        console.error('Error:', err);
    });
});

// Delete an Expense
function deleteExpense(id) {
    fetch(`http://localhost:3000/api/expenses/${id}`, {
        method: 'DELETE'
    })
    .then(response => response.json())
    .then(data => {
        alert('Expense deleted');
        loadExpenses();  // Reload the expenses list
    })
    .catch(err => console.error('Error:', err));
}
