import React from "react";
import NavPrevNext from "./NavPrevNext";

const DayOfWeek = ({content}) => {
    return (
       <div> <div className={"layout-content-container day-of-week"}>
            <div className={"day--title"}>
                <h1>{content.dayOfWeek}</h1>
            </div>
            <div className={"day--content"}>
                <img
                    className={"day--image"}
                    src={content.image}
                    height={"200"}
                    width={"200"}
                    alt={"planet"}
                />
                <p>{content.dayDescription}</p>
            </div>
        </div>
        <div> <NavPrevNext key={content.dayIndex} dayIndex={content.dayIndex}/></div></div>
    );
};

export default DayOfWeek;
