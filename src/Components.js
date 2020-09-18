import React from 'react';
import ComponentsChild from "./ComponentsChild";

export default function Components () {

    const year = 2020;

    const person = {
        name: 'Elena',
        isStudent: 'true',
        spec: 'Front-End',
        progLang: 'React'
    };
    const car1 = {brand: 'Subaru', model: 'Forester', year: 2019}
    const car2 = {brand: 'Toyota', model: 'Tacoma', year: 2019}
    const cars = [car1, car2];

    return (
        <div>
            <ComponentsChild
                currentYear={year}
                person={person}
                cars={cars}
            />
        </div>
    );
}

