import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../Expenses/ExpenseFilter';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2021');

    const filterChangeHandler = (selectedYear) => {

        setFilteredYear(selectedYear);

    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    let expenseFirst = <p>No Expenses Found</p>;

    if (filteredExpenses.length > 0) {

        expenseFirst = filteredExpenses.length > 0 && (
            filteredExpenses.map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />)
        )

    }



    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />

            {expenseFirst}

        </Card>
    );
}

export default Expenses;
