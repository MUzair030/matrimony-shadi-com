import React from 'react'
import { Header, Footer, ChatBox, MatchListBoxVersion2, MyMatchesFilter } from '../../../Components'
import "./MyMatches.css"

const MyMatches = (props) => {

    const user_profile1 = "assets/images/profiles/dummy/profile-photo-1.jpg";
    const user_profile2 = "assets/images/profiles/dummy/profile-photo-4.jpg";
    const user_profile3 = "assets/images/profiles/dummy/profile-photo-3.jpg";
    const user_profile4 = "assets/images/profiles/dummy/profile-photo-5.jpg";
    const user_profile5 = "assets/images/profiles/dummy/profile-photo-6.jpg";
    const user_profile6 = "assets/images/profiles/dummy/profile-photo-7.jpg";
    const user_profile7 = "assets/images/profiles/dummy/profile-photo-8.jpg";
    const user_profile8 = "assets/images/profiles/dummy/bala_hatun_1.jpg";
    const user_profile9 = "assets/images/profiles/dummy/bala_hatun_2.jpg";
    const user_profile10 = "assets/images/profiles/dummy/bala_hatun_3.jpg";
    const user_profile11 = "assets/images/profiles/dummy/bala_hatun_4.jpg";

    return (
        <>
            <Header isProfile={true} disabled={true} />
            <div className="matches_page_wrapper">
                <div className="container_border_mini">
                    <div className="mymatches_page_container">
                        <div className="mymatches_page_left_container d-none d-lg-block">
                            <ChatBox />
                        </div>
                        <div className="mymatches_page_center_container px-0">
                            <div className="row justify-content-center m-0">
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                    <MatchListBoxVersion2 user_name="Aliza Anthony" />
                                </div>
                                {/* <div className="my_match_col col-12 col-sm-8 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                    <MatchListBoxVersion2 user_name="Ania Ghafoor" user_profile={user_profile1} />
                                </div>
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                {/* <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                    <MatchListBoxVersion2 user_name="Samra Anam" user_profile={user_profile2} />
                                </div>
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">                                {/* <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                    <MatchListBoxVersion2 user_name="Batool Akash" user_profile={user_profile3} />
                                </div>
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                {/* <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                    <MatchListBoxVersion2 user_profile={user_profile4} />
                                </div>
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                {/* <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                    <MatchListBoxVersion2 user_profile={user_profile8} user_name="Ania Shah" />
                                </div>
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                {/* <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                    <MatchListBoxVersion2 user_profile={user_profile5} />
                                </div>
                                <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2">
                                {/* <div className="my_match_col col-12 col-sm-12 col-md-6 col-lg-6 mb-4 px-0 px-sm-2"> */}
                                    <MatchListBoxVersion2 user_profile={user_profile10} user_name="Amina Azhar" />
                                </div>
                            </div>
                        </div>
                        <div className="mymatches_page_right_container d-none d-lg-block">
                            <MyMatchesFilter />
                        </div>
                    </div>
                </div>
            </div>
            <Footer isProfile={true} />
        </>
    )
}

export default MyMatches