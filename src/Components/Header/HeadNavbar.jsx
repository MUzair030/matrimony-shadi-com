/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import "./Header.css"
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
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom'
import NavShadiTab from "./NavbarTabs/NavShadiTab"
import NavMatchesTab from "./NavbarTabs/NavMatchesTab"
import NavSearchTab from "./NavbarTabs/NavSearchTab"

const HeadNavbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const currentUrlPath = location.pathname;

    const [activeNavTab, setActiveNavTab] = useState(0)

    const handleActiveNavTab = (tab) => {
        setActiveNavTab(tab)
    }

    return (
        <>
            <div className="head_navbar">
                <Nav className='matches_nav' variant="pills">
                    {/* <Nav.Item className='matches_navitem'>
                        <Nav.Link eventKey="/dashboard" onClick={() => navigate("/dashboard")}>
                            Dashboard
                        </Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item className="head_navbar_menu"
                        style={{ borderColor: activeNavTab == 1 ? "var(--color-primary-hover)" : "transparent" }}
                        onClick={() => (handleActiveNavTab(1))}>
                        <span className="menu_title">My Shadi</span>
                    </Nav.Item>
                    <Nav.Item className="head_navbar_menu"
                        style={{ borderColor: activeNavTab == 2 ? "var(--color-primary-hover)" : "transparent" }}
                        onClick={() => (handleActiveNavTab(2))}>
                        <span className="menu_title">Matches</span>
                    </Nav.Item>
                    <Nav.Item className="head_navbar_menu"
                        style={{ borderColor: activeNavTab == 3 ? "var(--color-primary-hover)" : "transparent" }}
                        onClick={() => handleActiveNavTab(3)}>
                        <span className="menu_title">Search</span>
                    </Nav.Item>
                </Nav>
            </div>
            {
                activeNavTab == 1 && <>
                    <NavShadiTab />
                </>
            }
            {
                activeNavTab == 2 && <>
                    <NavMatchesTab />
                </>
            }
            {
                activeNavTab == 3 && <>
                    <NavSearchTab />
                </>
            }
        </>
    )
}

export default HeadNavbar