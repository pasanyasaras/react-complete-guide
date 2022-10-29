import './ExpenseItem.css';

function ExpenseItem(){
    const expenseDate = new Date(2022, 10,29);
    const expenseTitle = 'Electricity Bill';
    const expenseAmount = 10.99;

    return(
        <div className="expense-item">
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
            </div>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>);
}

export default ExpenseItem;
