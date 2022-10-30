import React from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {id:'e1',  title: 'Cargills Food City', amount: '5,823.72', date: new Date(2022, 10,29)},
        {id:'e2',title: 'PickMe Foods', amount: '560.00', date: new Date(2022, 10,30)},
        {id:'e3',title: 'Dialog Axiata PLC', amount: '2,500.00', date: new Date(2022, 10,31)},
        {id:'e4',title: 'Daraz.lk', amount: '3,500.00', date: new Date(2022, 11,5)},
    ];

    const addExpenseHandler = (expense) => {
        console.log('In App.js');
        console.log(expense);
    }

    // return React.createElement('div',
    //     {},
    //     React.createElement('h2',{},'Expense Manager'),
    //     React.createElement(Expenses, {items:expenses})
    // );

  return (
    <div>
        <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items={expenses} />
    </div>
  );
}

export default App;
