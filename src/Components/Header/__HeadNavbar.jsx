/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Header.css"
import "./HeadNavbar.css"
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
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import NavShadiTab from "./NavbarTabs/NavShadiTab"
import NavMatchesTab from "./NavbarTabs/NavMatchesTab"
import NavSearchTab from "./NavbarTabs/NavSearchTab"
import { Nav, Navbar, NavItem, NavDropdown, } from "react-bootstrap"

const HeadNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentUrlPath = location.pathname;

    const [collapsed, setCollapsed] = useState(false)
    const toggleNavbar = () => {
        setCollapsed(!collapsed)
    }

    const [tabValue, setTabValue] = useState(0);
    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);

        if (newValue == 0) {
            // navigate("/dashboard")
        }
        if (newValue == 1) {
            // navigate("/today-matches")
        }
        if (newValue == 2) {

        }
    };

    return (
        <>
            <div className="head_navbar">
                <Navbar  expand="lg" className='w-100' style={{zIndex: '999999'}} zIndex={9999999}>
                    <Navbar.Brand onClick={() => navigate("/")}>Shaadi</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='justify-content-center'>
                        <Nav className="me-auto_">
                            {/* <Nav.Link href="#home">Home</Nav.Link> */}
                            <NavDropdown title="Shadi" id="basic-nav-dropdown" style={{zIndex: 999999}} className='head_navbar_menu'>
                                <NavDropdown.Item onClick={() => navigate("/dashboard")}>Dashboard</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Matches" id="basic-nav-dropdown" style={{zIndex: 999999}} className='head_navbar_menu'>
                                <NavDropdown.Item onClick={() => navigate("/today-matches")}>Today's Matches</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/my-matches")}>My-Matches</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/near-me")}>Near Me</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => navigate("/viewed")}>Recently Viewed</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Search" id="basic-nav-dropdown" style={{zIndex: 999999}} className='head_navbar_menu'>
                                <NavDropdown.Item>Search-1</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </>
    )
}

export default HeadNavbar