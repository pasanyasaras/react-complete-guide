import React from "react";
import Expenses from './components/Expenses/Expenses';

function App() {
    const expenses = [
        {id:'e1',  title: 'Electricity Bill', amount: 10.99, date: new Date(2022, 10,29)},
        {id:'e2',title: 'Water Bill', amount: 12.99, date: new Date(2022, 10,30)},
        {id:'e3',title: 'Internet Bill', amount: 5.99, date: new Date(2022, 10,31)},
        {id:'e4',title: 'Credit Card Bill', amount: 20.99, date: new Date(2022, 11,5)},
    ];

    return React.createElement('div',
        {},
        React.createElement('h2',{},'Expense Manager'),
        React.createElement(Expenses, {items:expenses})
    );

  // return (
  //   <div>
  //     <h2>Expense Manager</h2>
  //       <Expenses items={expenses} />
  //   </div>
  // );
}

export default App;
