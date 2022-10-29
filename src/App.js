import logo from './logo.svg';
import './App.css';
import ExpenseItem from "./components/ExpenseItem";

function App() {
    const expenses = [
        {id:'e1',  title: 'Electricity Bill', amount: 10.99, date: new Date(2022, 10,29)},
        {id:'e2',title: 'Water Bill', amount: 12.99, date: new Date(2022, 10,30)},
        {id:'e3',title: 'Internet Bill', amount: 5.99, date: new Date(2022, 10,31)},
        {id:'e4',title: 'Credit Card Bill', amount: 20.99, date: new Date(2022, 11,5)},
    ];


  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date.toDateString()}></ExpenseItem>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date.toDateString()}></ExpenseItem>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date.toDateString()}></ExpenseItem>
    </div>
  );
}

export default App;
