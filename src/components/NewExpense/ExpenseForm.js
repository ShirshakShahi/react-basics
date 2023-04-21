import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // cosnt[userInput, setUserInput] = useState({
    //     enteredTitle : '',
    //     enteredAmount : '',
    //     enteredDate : ''
    // });



    const TitleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // setUserInput((prevSate)=>{
        //     return{...prevState, 
        //         enteredTitle : event.target.value
        //     }
        // });
    }


    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput((prevSate)=>{
        //     return{...prevState, 
        //         enteredAmount : event.target.value
        //     }
        // });
    }

    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput((prevSate)=>{
        //     return{...prevState, 
        //         enteredDate : event.target.value
        //     }
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };


        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
 
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value = {enteredTitle} onChange={TitleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value = {enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-01-01" value = {enteredDate} onChange={dateChangedHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit" >Add Expense</button>
            </div>
        </form>

    );

}

export default ExpenseForm;