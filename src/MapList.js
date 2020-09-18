import React from "react";
// import MapListItem from "./MapListItem";
export default function MapList(props) {

    // const carBrand = props.el.brand;
    // const carModel = props.el.model;

    const list2 = props.list;

    return (
        <div>
    { list2.map(el => <li key={el.id}>{el.brand}</li>) }
        </div>

    // <ul>
    //     <li> {carBrand} {carModel} </li>
    // </ul>

    // <div>
    //     {list2.map(el =>{
    //         return <MapListItem key={el.id} el={el} />
    //     })}
    // </div>
);

}
