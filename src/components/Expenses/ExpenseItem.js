//ExpenseItem.js
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  useState();

  const [title, setTitle] = useState(props.title);
  const [date, setDate] = useState(props.date);
  const [amount, setAmount] = useState(props.amount);

  function clickHandler() {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
