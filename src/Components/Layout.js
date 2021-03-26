import React from "react";
import Navigation from "./Navigation";
import Title from "./Title";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <div>
            <Title/>
            <Navigation />
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;
