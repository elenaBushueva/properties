import React from "react";

export default function MyMapList(props) {

    console.log(props);

    const name = props.el.name;
    const group = props.el.group;
    const score = props.el.score;
    const id = props.el.id;

    const country = props.el.country;
    const capital = props.el.capital;

    const bookName = props.el.bookName;
    const author = props.el.author;

    return (
        <ul>
            <li> {name} {group} {score} {id} </li>
            <li> {country} {capital} </li>
            <li> {bookName} {author} </li>
        </ul>
    )
}