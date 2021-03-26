import React from "react";
import DayOfWeek from "../Components/DayOfWeek";
import Layout from "../Components/Layout";
import mars from "../media/mars.jpg";
import moon from "../media/moon.jpg";
import mercury from "../media/mercury.jpg";
import jupiter from "../media/jupiter.jpg";
import venus from "../media/venus.jpg";
import saturn from "../media/saturn.jpg";
import sun from "../media/sun.jpg";

const DayOfWeekPage = ({pageContext}) => {

        const getImage = (image) => {
            switch (image) {
                case "mars":
                    return mars;
                case "moon":
                    return moon;
                case "mercury":
                    return mercury;
                case "jupiter":
                    return jupiter;
                case "venus":
                    return venus;
                case "saturn":
                    return saturn;
                case "sun":
                    return sun;
                default:
                    return sun;
            }
        };

        console.log("jjp",pageContext)
    return (
        <Layout><DayOfWeek key={pageContext.dayIndex} content={{...pageContext, image: getImage(pageContext.image)}}/></Layout>
    );
};

export default DayOfWeekPage;
