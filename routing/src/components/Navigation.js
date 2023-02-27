import React from "react";

const Navigation = () => {
    const menuItems = [
        { title: "Home", link: "/" },
        { title: "Details 1", link: "/Details/1" },
        { title: "Details 2", link: "/Details/2" },
        { title: "Details 3", link: "/Details/3" },
        { title: "Details 4", link: "/Details/4" },
        { title: "Contact", link: "/Contact" }
    ];

    return (
        <div>
            <ul>
                {menuItems.map((menuItem, i) => <li key={i}><a href={ menuItem.link}>{ menuItem.title}</a></li>)}
            </ul>
        </div>
    );
}

export default Navigation;
