import React from "react";
import MenuList from "./MenuList";

export default function Menu() {

    const menu = [
        {title: 'Home', link: '/'},
        {title: 'Products', link: '/products'},
        {title: 'Contacts', link: '/contacts'},
    ];

    return (
        <div>
            {/*<MenuList />*/}
            {/*<MenuList menu={menu}/>*/}
            {menu.map(el => <MenuList key={el.title} el={el} />)}
        </div>
    )
}