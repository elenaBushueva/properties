import React from "react";
import MapList from "./MapList";
export default function Map() {

    const listFromSeller = [
        {brand: 'Subaru', model: 'Forester', id: '1'},
        {brand: 'Toyota', model: 'Tacoma', id: '2'},
        {brand: 'Tesla', model: 'S3', id: '3'},
    ]

    return (
        <div>
            <MapList list={listFromSeller} />


            {/*{listFromSeller.map(el => <li key={el.brand}>{el.brand}</li>)}*/}
            {/*{listFromSeller.map(el=> <MapList key={el.id} el={el}/>)}*/}
        </div>
    )
}
