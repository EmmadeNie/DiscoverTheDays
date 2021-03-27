import React from "react";
import Layout from "../Components/Layout";

const HomePage = ({pageContext}) => {
    console.log(pageContext)
    return  <Layout className={`background-class Home`}><div><h1>{pageContext.siteTitle}</h1><p>{pageContext.description}</p></div></Layout>;
};

export default HomePage;
