/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import { Header, Footer, RecentlyViewBox, ChatBox, MyMatchesFilter } from '../../../Components'
import "./RecentlyViewed.css"
import useWindowDimensions from "../../../Hooks/useWindowDimensions"
import RecentlyViewedDesk from "./RecentlyViewedDesk";
import RecentlyViewedMobi from "./RecentlyViewedMobi";

const RecentlyViewed = (props) => {

    const { screenWidth, screenHeight } = useWindowDimensions();

    return (
        <>
            <Header isProfile={true} disabled={true} />
            {
                screenWidth > 991 ? <RecentlyViewedDesk /> : <RecentlyViewedMobi />
            }
            <Footer isProfile={true} />
        </>
    )
}

export default RecentlyViewed