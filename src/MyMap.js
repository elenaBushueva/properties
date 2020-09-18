import React from "react";
import MyMapList from "./MyMapList";

export default function MyMap() {

    const person = [
        {name: 'Elena', group: 'EF-5', score: 100, id: '1'},
        {name: 'Chris', group: 'EF-5', score: 150, id: '2'},
    ]

    const capitals = [
        {country: 'Russia', capital: 'Moscow'},
        {country: 'Great Britain ', capital: 'London'},
        {country: 'USA', capital: 'Washington DC'},
    ]

    const books = [
        {bookName: 'Idiot', author: 'Dostoevsky', id: '6'},
        {bookName: 'Hamlet', author: 'Shakespeare', id: '7'},
        {bookName: 'The Adventures of Tom Sawyer ', author: 'Mark Twain', id: '8'},
    ]

    return (
        <div>
            {person.map(el => <MyMapList key={el.id} el={el} />)}
            {capitals.map(el => <MyMapList key={el.country} el={el} />)}
            {books.map(el => <MyMapList key={el.id} el={el} />)}
        </div>
    )
}