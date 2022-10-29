import './ExpenseItem.css';

function ExpenseItem(){
    return(
        <div className="expense-item">
            <div>October 29th 2022</div>
            <div className="expense-item__description">
                <h2>Electricity Bill</h2>
            </div>
            <div className="expense-item__price">$10.16</div>
        </div>);
}

export default ExpenseItem;
