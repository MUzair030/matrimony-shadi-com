import React from 'react'
import { Header, Footer, MatchListBoxVersion2, MyMatchesFilter } from '../../../Components'
import "./MoreMatches.css"

const MoreMatches = (props) => {

    const user_profile1 = "assets/images/profiles/dummy/profile-photo-1.jpg";
    const user_profile2 = "assets/images/profiles/dummy/profile-photo-4.jpg";
    const user_profile3 = "assets/images/profiles/dummy/profile-photo-3.jpg";
    const user_profile4 = "assets/images/profiles/dummy/profile-photo-5.jpg";
    const user_profile5 = "assets/images/profiles/dummy/profile-photo-6.jpg";
    const user_profile6 = "assets/images/profiles/dummy/profile-photo-7.jpg";
    const user_profile7 = "assets/images/profiles/dummy/profile-photo-8.jpg";

    return (
        <>
            <Header isProfile={true} disabled={true} />
            <div className="matches_page_wrapper">
                <div className="container_border_mini">
                    <div className="more_matches_page_container">
                        <div className="more_matches_page_left_container d-none d-lg-block">
                            
                        </div>
                        <div className="more_matches_page_center_container">
                            <div className="row m-0">
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_name="Komal Jha" user_profile={user_profile3} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_name="Eshal Ansari" user_profile={user_profile5} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_name="Saira Khan" user_profile={user_profile2} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile4} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile1} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile7} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile6} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile1} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile2} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile3} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile4} />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 />
                                </div>
                                <div className="col-12 col-sm-12 col-md-6 col-lg-6 mb-4">
                                    <MatchListBoxVersion2 user_profile={user_profile6} />
                                </div>
                            </div>
                        </div>
                        <div className="more_matches_page_right_container d-none d-lg-block">
                            <MyMatchesFilter />
                        </div>
                    </div>
                </div>
            </div>
            <Footer isProfile={true} />
        </>
    )
}

export default MoreMatches