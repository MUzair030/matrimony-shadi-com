/* eslint-disable no-unused-vars */
import React, { useState, } from 'react';
import "./InboxPage.css";
import "./_chat.scss"
import "./_chat_responsive.scss"
import 'emoji-mart/css/emoji-mart.css'
import { Container, Row, Col, Card, CardBody, Media, Form, FormGroup, Input, InputGroup, Button, Nav, NavItem, NavLink, TabPane, TabContent } from 'reactstrap'
import { Header, Footer, MatchViewBox, ChatBox, MyMatchesFilter } from '../../Components'
import MenuIcon from '@mui/icons-material/Menu';
import { Picker } from 'emoji-mart'

const InboxPage = () => {

    const [messageInput, setMessageInput] = useState('');
    const [menuToggle, setMenuToggle] = useState(false);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [activeTab, setActiveTab] = useState('1');

    const toggleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
    }

    const addEmoji = (emoji) => {
        const text = `${messageInput}${emoji.native}`;
        setShowEmojiPicker(false);
        setMessageInput(text)
    }

    const handleMessageChange = (message) => {
        setMessageInput(message)
    }

    const chatMenuToggle = () => {
        setMenuToggle(!menuToggle)
    }

    const userProfile1 = "assets/images/profiles/dummy/profile-photo-4.jpg"
    const userProfile2 = "assets/images/profiles/dummy/profile-photo-2.jpg"
    const userProfile3 = "assets/images/profiles/dummy/bala_hatun_1.jpg"
    const userProfile4 = "assets/images/profiles/dummy/profile-photo-7.jpg"
    const userProfile5 = "assets/images/profiles/dummy/profile-photo-men-1.jpg"
    const userProfile6 = "assets/images/profiles/dummy/profile-photo-men-2.jpg"

    return (
        <>
            <Header isProfile={true} disabled={true} />
            <div className="inbox_page_wrapper">
                <Row>
                    <Col sm="12" className="call-chat-sidebar">
                        <Card style={{ paddingBottom: 15, }}>
                            <CardBody className="chat-body" style={{ overflow: 'hidden', }}>
                                <div className="chat-box">
                                    <div className="chat-left-aside">
                                        <div className="media">
                                            <Media src={`${process.env.PUBLIC_URL}/${userProfile1}`} className="rounded-circle user-image" alt="" />
                                            <div className="about mb-2">
                                                <div className="name f-w-600">{"Johan Deo"}</div>
                                                <div className="status">
                                                    {"Out is my favorite"}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="people-list">
                                            <div className="search">
                                                <Form className="theme-form">
                                                    <FormGroup className="form-group">
                                                        <Input
                                                            className="form-control"
                                                            type="text"
                                                            placeholder="search"
                                                            defaultValue={""}
                                                        />
                                                        {/* <i className="fa fa-search"></i> */}
                                                    </FormGroup>
                                                </Form>
                                            </div>
                                            <ul className="list">
                                                <li className={`clearfix active`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile3}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle online`}></div>
                                                    <div className="about">
                                                        <div className="name">Alizabeth Warm</div>
                                                        <div className="status">
                                                            Change for anyone
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile2}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle offline`}></div>
                                                    <div className="about">
                                                        <div className="name">Alina Aslam</div>
                                                        <div className="status">
                                                            first bun like a sun.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile5}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle offline`}></div>
                                                    <div className="about">
                                                        <div className="name">Ginger Johnston</div>
                                                        <div className="status">
                                                            Change for anyone.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile4}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle offline`}></div>
                                                    <div className="about">
                                                        <div className="name">Kori Thomas</div>
                                                        <div className="status">
                                                            Change for anyone.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile6}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle offline`}></div>
                                                    <div className="about">
                                                        <div className="name">Porter Ginger</div>
                                                        <div className="status">
                                                            Change for anyone.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile2}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle online`}></div>
                                                    <div className="about">
                                                        <div className="name">Janifer Johnson</div>
                                                        <div className="status">
                                                            Change for anyone.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile3}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle online`}></div>
                                                    <div className="about">
                                                        <div className="name">Aiden Chavez</div>
                                                        <div className="status">
                                                            Change for anyone.
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className={`clearfix`}>
                                                    <img src={`${process.env.PUBLIC_URL}/${userProfile4}`} className="rounded-circle user-image" alt="" />
                                                    <div className={`status-circle online`}></div>
                                                    <div className="about">
                                                        <div className="name">Angelina Jolie</div>
                                                        <div className="status">
                                                            Change for anyone.
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col className="call-chat-body">
                        <Card>
                            <CardBody className="p-0">
                                <Row className="chat-box">
                                    <Col className="pr-0 chat-right-aside">
                                        <div className="chat">
                                            <div className="chat-header clearfix">
                                                <Media src={`${process.env.PUBLIC_URL}/${userProfile1}`} className="rounded-circle" alt="" />
                                                <div className="about">
                                                    <div className="name">
                                                        Johan Deo
                                                    </div>
                                                    <div className="status digits" >
                                                        {'online'}
                                                    </div>
                                                </div>
                                                <ul className="list-inline float-left float-sm-right chat-menu-icons d-flex_ _justify-content-end">
                                                    {/* <MenuIcon className='float-right' /> */}
                                                    {/* <li className="list-inline-item toogle-bar"><a href="#javascript"><i className="fa fa-bars"></i></a></li> */}
                                                    <li className="list-inline-item toogle-bar" onClick={() => chatMenuToggle()}><a href="#javascript"><i><MenuIcon /></i></a></li>
                                                </ul>
                                            </div>
                                            <div className="chat-history chat-msg-box custom-scrollbar" >
                                                <ul className='chat-msg-box_list'>
                                                    <li className="clearfix">
                                                        <div className={`message my-message float-end`}>
                                                            <Media src={`${process.env.PUBLIC_URL}/${userProfile1}`}
                                                                className={`rounded-circle float-end chat-user-img`} alt="" />
                                                            <div className="message-data text-end">
                                                                <span className="message-data-time">{"10:12 am"}</span>
                                                            </div>
                                                            {"Are we meeting today? Project has been already finished and I have results to show you."}
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <div className={`message my-message float-start`}>
                                                            <Media src={`${process.env.PUBLIC_URL}/${userProfile5}`}
                                                                className={`rounded-circle float-start chat-user-img`} alt="" />
                                                            <div className="message-data text-start">
                                                                <span className="message-data-time">{"10:14 am"}</span>
                                                            </div>
                                                            {"Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?."}
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <div className={`message my-message float-start`}>
                                                            <Media src={`${process.env.PUBLIC_URL}/${userProfile5}`}
                                                                className={`rounded-circle float-start chat-user-img`} alt="" />
                                                            <div className="message-data text-start">
                                                                <span className="message-data-time">{"10:14 am"}</span>
                                                            </div>
                                                            {"Well I am not sure. The rest of the team."}
                                                        </div>
                                                    </li>
                                                    <li className="clearfix">
                                                        <div className={`message my-message float-end`}>
                                                            <Media src={`${process.env.PUBLIC_URL}/${userProfile1}`}
                                                                className={`rounded-circle float-end chat-user-img`} alt="" />
                                                            <div className="message-data text-end">
                                                                <span className="message-data-time">{"10:20 am"}</span>
                                                            </div>
                                                            {"Actually everything was fine. I'm very excited to show this to our team."}
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="chat-message clearfix ps-3 pe-0">
                                                <Row>
                                                    <div className="mb-2">
                                                        {showEmojiPicker ? (
                                                            <Picker set="apple" emojiSize={30} onSelect={addEmoji} />
                                                        ) : null}
                                                    </div>
                                                    <Col xl="12" className="d-flex">
                                                        <div className="smiley-box bg-primary">
                                                            <div className="picker" onClick={() => toggleEmojiPicker()}>
                                                                <Media src={require('../../assets/IMAGES/smiley.png')} alt="" />
                                                            </div>
                                                        </div>
                                                        <InputGroup className="text-box inbox_text_box">
                                                            <Input
                                                                type="text"
                                                                className="form-control input-txt-bx"
                                                                placeholder="Type a message......"
                                                                value={messageInput}
                                                                // onKeyPress={(e) => handleMessagePress(e)}
                                                                onChange={(e) => handleMessageChange(e.target.value)}
                                                            />
                                                            <Button color="primary">SEND</Button>
                                                        </InputGroup>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className={`pl-0 chat-menu ${menuToggle ? 'show' : ''}`}>
                                        {/* <Nav tabs className="nav  border-tab nav-primary">
                                            <NavItem id="myTab" role="tablist">
                                                <NavItem id="myTab" role="tablist">
                                                    <NavLink tag="a" href="#javascript" className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                                                        {"PROFILE"}
                                                    </NavLink>
                                                </NavItem>
                                            </NavItem>
                                        </Nav> */}
                                        <TabContent activeTab={activeTab}>
                                            <TabPane tabId="1">
                                                <div className="user-profile">
                                                    <div className="image">
                                                        <div className="avatar text-center"><Media body alt="" src={`${process.env.PUBLIC_URL}/${userProfile1}`} /></div>
                                                        {/* <div className="icon-wrapper"><i className="fa fa-pencil"></i></div> */}
                                                    </div>
                                                    <div className="user-content text-center">
                                                        <h5 className="text-uppercase">Johan Deo</h5>
                                                        {/* <div className="social-media">
                                                            <ul className="list-inline">
                                                                <li className="list-inline-item"><a href="#javascript"><i className="fa fa-facebook"></i></a></li>
                                                                <li className="list-inline-item"><a href="#javascript"><i className="fa fa-google-plus"></i></a></li>
                                                                <li className="list-inline-item"><a href="#javascript"><i className="fa fa-twitter"></i></a></li>
                                                                <li className="list-inline-item"><a href="#javascript"><i className="fa fa-instagram"></i></a></li>
                                                                <li className="list-inline-item"><a href="#javascript"><i className="fa fa-rss"></i></a></li>
                                                            </ul>
                                                        </div> */}
                                                        <hr />
                                                        <div className="follow text-center">
                                                            <Row>
                                                                <Col className="border-right"><span>Following</span>
                                                                    <div className="follow-num">{"236k"}</div>
                                                                </Col>
                                                                <Col><span>Follower</span>
                                                                    <div className="follow-num">{"3691k"}</div>
                                                                </Col>
                                                            </Row>
                                                        </div>
                                                        <hr />
                                                        <div className="text-center digits">
                                                            <p className="mb-0">{"johan.deo23@gmail.com"}</p>
                                                            <p className="mb-0">{"+91 365 - 658 - 1236"}</p>
                                                            <p className="mb-0">{"Fax: 123-4560"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TabPane>
                                        </TabContent>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            <Footer isProfile={true} />
        </>
    )
}

export default InboxPage