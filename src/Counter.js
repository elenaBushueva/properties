import React, {useState} from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0);
    const [count, setCount] = useState('1');


    const buttonMinus3 = () => {
        setCounter(counter - 3);
    }
    const buttonMinus2 = () => {
        setCounter(counter - 2);
    }
    const buttonMinus = () => {
        setCounter(counter - 1);
    }


    const buttonPlus = () => {
        setCounter(counter + 1);
    }
    const buttonPlus2 = () => {
        setCounter(counter + 2);
    }
    const buttonPlus3 = () => {
        setCounter(counter + 3);
    }


    const buttonDivide365 = () => {
        setCount(count / 365);
    }
    const buttonDivide3 = () => {
        setCount(count / 3);
    }
    const buttonDivide = () => {
        setCount(count / 2);
    }
    const buttonMult = () => {
        setCount(count * 2);
    }
    const buttonMult30 = () => {
        setCount(count * 30);
    }
    const buttonMult365 = () => {
        setCount(count * 365);
    }


    const buttonRes = () => {
        setCounter(0);
    }
    const buttonRes2 = () => {
        setCount(1);
    }


    return (
        <div>
            <button onClick={buttonMinus3}>-3</button>
            <button onClick={buttonMinus2}>-2</button>
            <button onClick={buttonMinus}>-1</button>
            {counter}
            <button onClick={buttonPlus}>+1</button>
            <button onClick={buttonPlus2}>+2</button>
            <button onClick={buttonPlus3}>+3</button>
            <br/>

            <button onClick={buttonRes}>Reset</button>
            <br/>

            <button onClick={buttonDivide365}>/365</button>
            <button onClick={buttonDivide3}>/3</button>
            <button onClick={buttonDivide}>/2</button>
            {count}
            <button onClick={buttonMult}>*2</button>
            <button onClick={buttonMult30}>*30</button>
            <button onClick={buttonMult365}>*365</button>
            <br/>

            <button onClick={buttonRes2}>Reset</button>
        </div>
    )
}