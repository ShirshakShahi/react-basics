import React from "react";

import './ExpenseFilter.css';

const ExpenseFilter = (props) => {

    const onDropDownChangeHandler = (event) => {

        props.onChangeFilter(event.target.value);

    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                
                <label>Filtered By Year</label>
                <select value={props.selected} onChange={onDropDownChangeHandler}>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                </select>

            </div>
        </div>
    );

}


export default ExpenseFilter;