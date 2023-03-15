import axios from 'axios';

export function storeExpense(expenseData) {
  axios.post(
    'https://expensetracker-b632a-default-rtdb.firebaseio.com/expenses.json',
    expenseData
  );
}