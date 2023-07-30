import React from "react";
import BodyContain from "./body/bodyContain";
import Footer from "./footer/footer";
import Fundraiser from "./fundraiser/fundraiser";
import Payout from "./payout/payout";
import ToolBar from "./toolbar/toolbaar";

const MainContain = () => {
    return (
        <>
            <ToolBar />
            <BodyContain />
            <Fundraiser />
            <Payout />
            <Footer />
        </>
    )
}
export default MainContain;