import React, { useContext, useRef, useState } from "react";
import styles from './styles.module.css';
import { counterContext } from "../../Context/CounterContext";
import {PlusIcon} from "../Icons/PlusIcon"
import { MinusIcon } from "../Icons/MinusIcon"


export const Counter = () => {
    const { value, onChange } = useContext(counterContext)
    const ref = useRef(null)
    
    const handleUp = () => {
        onChange(value + 1)
    }

    const handleDown = () => {
        onChange(value - 1)
    }

    return (
        <div className={styles.counter}>
            <button onClick={handleUp}>
                <PlusIcon width="143px" height="143"/>
            </button>
            <div className={styles.numbersBackground}>
                <div id="counter" className={styles.numbers} ref={ref} onClick={()=>{console.log(ref)}}>{value}</div>
            </div>
            <div className={styles.numberDecoration}></div>
             <button onClick={handleDown}>
                <MinusIcon width="143px" height="143"/>
            </button>
        </div>
    )
}