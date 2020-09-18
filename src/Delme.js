import React, {useState} from "react";

export default function Delme() {

    const [count, setCount] = useState(5);
    const minus = () => {
        setCount(count - 1);
    }
    const plus = () => {
        setCount(count + 1);
    }

    const [count1, setCount1] = useState(10);
    const minus1 = () => {
        setCount1(count1 - 1);
    }
    const plus1 = () => {
        setCount1(count1 + 1);
    }

    const [count2, setCount2] = useState(60);
    const minus2 = () => {
        setCount2(count2 - 1);
    }
    const plus2 = () => {
        setCount2(count2 + 1);
    }

    return (
        <div>
            <button onClick={minus}>-</button>
            {count}
            <button onClick={plus}>+</button>

            <button onClick={minus1}>-</button>
            {count1}
            <button onClick={plus1}>+</button>

            <button onClick={minus2}>-</button>
            {count2}
            <button onClick={plus2}>+</button>
        </div>
    );
}