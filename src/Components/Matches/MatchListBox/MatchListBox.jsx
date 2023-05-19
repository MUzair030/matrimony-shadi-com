/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchListBox.css"
import useWindowDimensions from "../../../Hooks/useWindowDimensions"
import MatchListBoxDesk from "./MatchListBoxDesk/MatchListBoxDesk"
import MatchListBoxMobi from "./MatchListBoxMobi/MatchListBoxMobi"

const MatchListBox = (props) => {

    const { user_name } = props;

    const { screenWidth, screenHeight } = useWindowDimensions();

    return (
        <>
            {
                screenWidth > 1092.98 ? <MatchListBoxDesk user_name={user_name} /> : <MatchListBoxMobi user_name={user_name} />
            }
            
        </>
    )
}

export default MatchListBox