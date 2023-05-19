/* eslint-disable no-unused-vars */
import React from 'react'
import { Footer, Header } from '../../Components'
import "./Matches.css"
import MyMatches from './MyMatches/MyMatches'
import MatchesView from './MatchesView/MatchesView'
import { useNavigate } from "react-router-dom"

const Matches = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header isProfile={true} />
      <div className='matches_wrapped'>
        <div className="container_border_secondary py-5">
          {/* <MyMatches /> */}

          <MatchesView />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Matches