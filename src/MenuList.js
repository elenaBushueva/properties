import React from "react";

export default function MenuList(props) {

    // const m = ['one', 'two', 'first'];
    // const e =[];
    // for (let i = 0; i < m.length; i++){
    //     e.push(<li>{m[i]}</li>)
    // }

    // const c = m.map(el => <li key={el}>{el}</li>)

    // const c = props.menu.map(el => <li key={el.title}>{el.title}</li>)

    const title = props.el.title;
    const link = props.el.link;

    return (
        <ul>
            {
                // e
                // c
                <li> {title} {link}</li>
            }
        </ul>
    )
}

