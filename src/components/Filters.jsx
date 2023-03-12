import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectActive, selectAll, selectCompleted } from '../store/filters/filterReducer';

import "../App.scss"

const Filters = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filters)
    return (
        <div className='filters'>
            <button className='selector' onClick={() => dispatch(selectAll("all"))} style={{backgroundColor: filter === "all" ? "dimgray" : null}}>Все</button>
            <button className='selector' onClick={() => dispatch(selectActive("active"))} style={{backgroundColor: filter === "active" ? "dimgray" : null}}>Текущие</button>
            <button className='selector' onClick={() => dispatch(selectCompleted("completed"))} style={{backgroundColor: filter === "completed" ? "dimgray" : null}}>Завершенные</button>
        </div>
    );
};

export default Filters;