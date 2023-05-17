import React from 'react'
import "./FooterPages.css"
import { Header, Footer } from "../../Components"

const PrivacyPolicy = () => {
    return (
        <>
            <Header isProfile={true} disabled={true} />
            <div className="footer-page">
                <h2 className='foot-page-title privacy_p_t'>Privacy Policy</h2>
                
                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Introduction</h4>
                    <p className="fp-text-box-detail">This privacy policy outlines how we collect, use, disclose, and protect your personal information on our matrimonial website. We are committed to protecting your privacy and ensuring that your personal information is secure. By using our website, you consent to the terms of this privacy policy.</p>
                </div>

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Information We Collect</h4>
                    <p className="fp-text-box-detail">We collect various types of personal information from you when you register on our website or fill out any form on our website. This information includes your name, email address, date of birth, phone number, gender, and other relevant information. Additionally, we may collect your IP address and browser information to help us understand how you use our website.</p>
                </div>

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">How We Use Your Information</h4>
                    <p className="fp-text-box-detail">We use the information we collect to provide you with our matrimonial services and to improve our website's functionality and user experience. Specifically, we use your personal information to:</p>
                    <ul className='fp-text-box-list'>
                        <li>Create and manage your account</li>
                        <li>Facilitate communication between members</li>
                        <li>Match you with potential partners based on your preferences</li>
                        <li>Customize your user experience</li>
                        <li>Send you newsletters, promotional emails, and other marketing materials</li>
                    </ul>
                </div>

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Disclosure of Your Information</h4>
                    <p className="fp-text-box-detail">We may share your personal information with third parties who provide services to us, such as website hosting, data analysis, and email delivery. These third-party service providers are contractually obligated to protect your personal information and may only use it for the purposes of providing services to us.</p>
                    <p className="fp-text-box-detail">We may also disclose your personal information if required to do so by law or if we believe that such disclosure is necessary to protect our rights, your safety, or the safety of others.</p>
                </div>


                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Security of Your Information</h4>
                    <p className="fp-text-box-detail">We take reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. Our website uses secure socket layer (SSL) encryption technology to protect your personal information when it is transmitted over the internet. We also implement administrative, technical, and physical safeguards to protect your personal information from unauthorized access.</p>
                </div>

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Retention of Your Information</h4>
                    <p className="fp-text-box-detail">We will retain your personal information for as long as necessary to fulfill the purposes outlined in this privacy policy, unless a longer retention period is required by law.</p>
                </div> 

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Your Rights</h4>
                    <p className="fp-text-box-detail">You have the right to access, correct, and delete your personal information at any time. You can do so by logging into your account and updating your profile or by contacting us directly. You may also request that we restrict or object to the processing of your personal information, and we will comply with your request to the extent required by law.</p>
                </div> 

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Changes to Our Privacy Policy</h4>
                    <p className="fp-text-box-detail">We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any changes to this privacy policy by posting the updated policy on our website and by emailing you a notification. We encourage you to review this privacy policy periodically to stay informed about our data practices.</p>
                </div> 

                <div className="fp-text-box">
                    <h4 className="fp-text-box-title">Contact Us</h4>
                    <p className="fp-text-box-detail">If you have any questions or concerns about this privacy policy or our data practices, please contact us at [insert contact information].</p>
                </div> 

            </div>
            {/* <Footer isProfile={true} /> */}
        </>
    )
}

export default PrivacyPolicy