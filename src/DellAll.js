import React, {useState} from "react";
import DellAllList from "./DellAllList";

export default function DellAll() {

    const listFromSeller = [
        {brand: 'Subaru', model: 'Forester', id: '1'},
        {brand: 'Toyota', model: 'Tacoma', id: '2'},
        {brand: 'Tesla', model: 'S3', id: '3'},
    ]

    const [count, setCount] = useState({listFromSeller})
    const deleteAll = () => {
        setCount([]);
    }

    return (
        <div>
            <DellAllList deleteAll={deleteAll} list={listFromSeller}/>
        </div>
    )
}