/* eslint-disable no-unused-vars */
import React from 'react'
import "./Header.css"
import Header from './Header'
import { Container } from 'react-bootstrap'

const HeaderWrapper = () => {
  return (
    <div className='header__wrapper'>
        <Container>
            <Header />
        </Container>
    </div>
  )
}

export default HeaderWrapper