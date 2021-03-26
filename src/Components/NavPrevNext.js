import { Link } from "gatsby";
import React from "react";
import getDaysOfWeek from "../Utils/getDaysOfWeek";

const NavPrevNext = ({dayIndex}) => {
    const getPrevLink = ()=> {
        const prevDay = getDaysOfWeek()[dayIndex -1]
        return <li>
            <Link to={`/${prevDay}/`}>{prevDay}</Link>
        </li>
    }
    const getNextLink = ()=> {
        const nextDay = getDaysOfWeek()[dayIndex +1]
        return <li>
            <Link to={`/${nextDay}/`}>{nextDay}</Link>
        </li>
    }
    return (
        <ul className={"layout-content-container nav-links"}>
            {getPrevLink()}
            {getNextLink()}
            {dayIndex}
        </ul>
    );
};

export default NavPrevNext;
