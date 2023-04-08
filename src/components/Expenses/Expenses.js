//Expenses.js file
//This is a stateful component
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import React, { useState } from 'react';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const handleYearFilterChange = yearData => {
    console.log("Expenses.js: " + yearData)
    setFilteredYear(yearData);
    console.log("Expenses.js: " + filteredYear);

  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter onYearChange={handleYearFilterChange} />
        {props.items.map(expense => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
