/* eslint-disable no-unused-vars */
import React from 'react'
import "./MatchListBoxVersion2.css"
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import MatchListBoxVersion2Desk from './MatchListBoxVersion2Desk/MatchListBoxVersion2Desk';
import MatchListBoxVersion2Mobi from './MatchListBoxVersion2Mobi/MatchListBoxVersion2Mobi';

const MatchListBoxVersion2 = (props) => {

    const { user_name, user_profile } = props;

    const PhotoTempRequest = `assets/images/profiles/dummy/250-photo-profile-1.jpg`

    const { screenWidth, screenHeight } = useWindowDimensions();

    return (
      <>
        {
          screenWidth > 768 ? <MatchListBoxVersion2Desk user_name={user_name} user_profile={user_profile} /> : <MatchListBoxVersion2Mobi user_name={user_name} user_profile={user_profile} />
        }
      </>
    )
}

export default MatchListBoxVersion2