import React from "react";

export default function DellAllList(props) {

    const list2 = props.list;
    const deleteButtonHandler = () => {
        props.deleteAll();
    }

    return (
        <div>
            <button onClick={deleteButtonHandler}>Delete All</button>

            {list2.map(el => <li key={el.id}>{el.brand}</li>)}
        </div>
    );

}

