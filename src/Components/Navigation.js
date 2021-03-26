import { Link } from "gatsby";
import React from "react";
import getDaysOfWeek from "../Utils/getDaysOfWeek";

const Nav = () => {

    const getNavLinks = ()=> getDaysOfWeek().map(day=> <li key={day}>
        <Link to={`/${day}/`}>{day}</Link>
    </li>)

    return (
            <ul className={"layout-content-container nav-links"}>
                  {getNavLinks()}
            </ul>
    );
};

export default Nav;
