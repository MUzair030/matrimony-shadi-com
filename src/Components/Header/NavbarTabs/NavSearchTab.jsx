/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import "../Header.css"
import {
  Nav
} from "react-bootstrap"
import {
  Tabs,
  Tab,
  Checkbox,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom'

const NavSearchTab = (props) => {

  const navigate = useNavigate();
  const location = useLocation();
  const currentUrlPath = location.pathname;

  useEffect(() => {
    // navigate("/today-matches")
  }, [])

  return (
    <>
      <Nav className='matches_nav' variant="pills" defaultActiveKey={currentUrlPath}>
        <Nav.Item className='matches_navitem'>
          <Nav.Link eventKey="/search-1">
            Search 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className='matches_navitem'>
          <Nav.Link eventKey="/search-2">
            Search 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  )
}

export default NavSearchTab