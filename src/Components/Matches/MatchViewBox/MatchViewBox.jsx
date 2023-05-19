/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import "./MatchViewBox.css"
import MatchViewBoxDesk from './MatchViewBoxDesk';
import MatchViewBoxMobi from './MatchViewBoxMobi';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

const MatchViewBox = (props) => {

  const { user_name } = props;
  const { screenWidth, screenHeight } = useWindowDimensions();

  return (
    <>
      {
        screenWidth > 768 ? <MatchViewBoxDesk user_name={user_name} /> : <MatchViewBoxMobi user_name={user_name} />
      }
    </>
  )
}

export default MatchViewBox