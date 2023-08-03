/* eslint-disable no-unused-vars */
import React, { useState, useRef } from 'react'
import { Header, Footer, RecentlyViewBox, ChatBox, MyMatchesFilter } from '../../../../Components'
import "../../../Matches/RecentlyViewed/RecentlyViewed.css"
import useWindowDimensions from "../../../../Hooks/useWindowDimensions"
import RecentVisitorsDesk from "./RecentVisitorsDesk";
import RecentVisitorsMobi from "./RecentVisitorsMobi";

const RecentVisitors = (props) => {

    const { screenWidth, screenHeight } = useWindowDimensions();

    return (
        <>
            <Header isProfile={true} disabled={true} />
            {
                screenWidth > 991 ? <RecentVisitorsDesk /> : <RecentVisitorsMobi />
            }
            <Footer isProfile={true} />
        </>
    )
}

export default RecentVisitors