import React, { useState } from 'react';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const [users, setUsers] = useState([]);

  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  const handelAddUser = (user) => {
    setUsers((prevUsers) => {
      return [...prevUsers, user];
    });
  };

  return (
    <div className='App'>
      <AddUser onAddUser={handelAddUser} />
      <UserList users={users} />
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
};

export default App;
