let budget = 50000; let expenses = [
    {
        name: "Groceries",
        amount: 2500,
        category: "Food"
    },
    {
        name: "Bus fare",
        amount: 1000,
        category: "Transport"
    },
    {
        name: "Movie",
        amount: 1500,
        category: "Entertainment"
    }
];
let foodExpense = 12500;
let transportExpense = 7800;
let rentExpense = 25000;
console.log("Budget:", budget);
console.log("Food Expense:", foodExpense);
console.log("Transport Expense:", transportExpense);
console.log("Rent Expense:", rentExpense);

let userBudget = prompt("Enter your monthly budget:");

console.log("Your budget is:", userBudget);

let totalExpenses = foodExpense + transportExpense + rentExpense;

let remainingBalance = userBudget - totalExpenses;

console.log("Total Expenses:", totalExpenses);
console.log("Remaining Balance:", remainingBalance);

function calculateBalance(budget, expenses) {
    return budget - expenses;
}let balance = calculateBalance(userBudget, totalExpenses);

console.log("Balance calculated by function:", balance);

const expenseForm = document.getElementById("expenseForm");

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const expenseName = document.getElementById("expenseName").value;
    const expenseAmount = Number(document.getElementById("expenseAmount").value);
    const expenseCategory = document.getElementById("expenseCategory").value;
    if (expenseAmount <= 0) {
    alert("Please enter a valid amount.");
    return;
}if (expenseAmount <= 0) {
    alert("Please enter a valid amount.");
    return;
}

    console.log("Expense Name:", expenseName);
    console.log("Amount:", expenseAmount);
    console.log("Category:", expenseCategory);
    const expenseList = document.getElementById("expenseList");

const newExpense = document.createElement("p");

newExpense.textContent =
    expenseName + " - KSh " + expenseAmount + " - " + expenseCategory;

expenseList.appendChild(newExpense);
if (expenseAmount >= 1000) {
    alert("This is a large expense.");
} else {
    alert("This is a small expense.");
}

if (expenseAmount >= 1000) {
    alert("This is a large expense.");
} else {
    alert("This is a small expense.");
}
    alert("Expense added successfully!");

    expenseForm.reset();
});