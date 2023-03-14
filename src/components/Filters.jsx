import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActive, selectAll, selectCompleted } from '../store/filters/filterReducer';

import "../App.scss"

const Filters = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filters)
    return (
        <div className='filters'>
            <button className='selector slct_1' onClick={() => dispatch(selectAll("all"))} style={{backgroundColor: filter === "all" ? "#1262bb" : null}}>Все</button>
            <button className='selector slct_2' onClick={() => dispatch(selectActive("active"))} style={{backgroundColor: filter === "active" ? "#1262bb" : null}}>Текущие</button>
            <button className='selector slct_3' onClick={() => dispatch(selectCompleted("completed"))} style={{backgroundColor: filter === "completed" ? "#1262bb" : null}}>Завершенные</button>
        </div>
    );
};

export default Filters;