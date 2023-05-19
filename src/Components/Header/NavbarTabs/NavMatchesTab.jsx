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

const NavMatchesTab = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentUrlPath = location.pathname;

    // const [firstNavigate, setFirstNavigate] = useState(true)
    // useEffect(() => {
    //     if(firstNavigate == false) {
    //         navigate("/today-matches")
    //     }
    //     setFirstNavigate(false)
    // }, [])

    return (
        <>
            <Nav className='matches_nav' variant="pills" defaultActiveKey={currentUrlPath}>
                {/* <Nav.Item className='matches_navitem'>
          <Nav.Link eventKey="/dashboard" onClick={() => navigate("/dashboard")}>
            Dashboard
          </Nav.Link>
        </Nav.Item> */}
                {/* <Nav.Item className='matches_navitem'>
          <Nav.Link eventKey="/new-matches" onClick={() => navigate("/new-matches")}>
            New Matches
          </Nav.Link>
        </Nav.Item> */}
                <Nav.Item className='matches_navitem'>
                    <Nav.Link eventKey="/today-matches" onClick={() => navigate("/today-matches")}>
                        Today's Matches
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item className='matches_navitem'>
                    <Nav.Link eventKey="/my-matches" onClick={() => navigate("/my-matches")}>My-Matches</Nav.Link>
                </Nav.Item>
                <Nav.Item className='matches_navitem'>
                    <Nav.Link eventKey="/near-me" onClick={() => navigate("/near-me")}>Near Me</Nav.Link>
                </Nav.Item>
                <Nav.Item className='matches_navitem'>
                    <Nav.Link eventKey="/viewed" onClick={() => navigate("/viewed")}>Recently Viewed</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item className='matches_navitem'>
          <Nav.Link eventKey="/more-matches" onClick={() => navigate("/more-matches")}>More Matches</Nav.Link>
        </Nav.Item> */}
            </Nav>
        </>
    )
}

export default NavMatchesTab