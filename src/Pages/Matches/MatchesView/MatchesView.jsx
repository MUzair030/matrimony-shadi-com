/* eslint-disable no-unused-vars */
import React from 'react'
import { Header, Footer, MatchViewBox, ChatBox, MyMatchesFilter } from '../../../Components'
import "./MatchesView.css"

const MatchesView = () => {
    return (
        <>
            {/* <div className='matchesview_page_wrapped'>
            MatchesView
        </div> */}
            <Header isProfile={true} disabled={true} />
            <div className="matches_page_wrapper">
                <div className="container_border_mini">
                    <div className="matches_view_page_container">
                        <div className="matches_view_page_left_container mb-3 d-none d-lg-block">
                            <ChatBox />
                        </div>  
                        <div className="matches_view_page_center_container mb-3">
                            <MatchViewBox user_name="Alishbah Swoarn" />
                        </div>
                        <div className="matches_view_page_right_container mb-3 d-none d-lg-block">
                            <MyMatchesFilter />
                        </div>
                    </div>
                </div>
            </div>
            <Footer isProfile={true} />
        </>
    )
}

export default MatchesView