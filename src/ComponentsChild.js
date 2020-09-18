import React from "react";
export default function ComponentsChild (props) {

    console.log(props)

    const lang = props.person.progLang;
    const carArray = props.cars;

    return (
        <div>
            {props.currentYear} <br/>
            {props.person.name} <br/>
            {props.person.spec} <br/>
            {lang} <br/>

            {carArray[1].model}
        </div>
    )
}