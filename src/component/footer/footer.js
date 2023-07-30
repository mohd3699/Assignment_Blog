import React from "react";
import './footer.css'
import Logo from '../../images/logo.png'
import VISA from '../../images/visa.png'
import MASTERCARD from '../../images/mastercard.png'
import AmericanExpress from '../../images/american-express.png'
import Rupay from '../../images/rupay.png'
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { BsTwitter, BsWhatsapp } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className="mainContainer">
                <div className="mainDivUpperDiv">
                    <img src={Logo} alt="Logo" className="mainDivUpper" />

                </div>
                <div className="mainDiv">
                    <div className="upperFooter">
                        <div className="logo">
                            <div className="logoImg">
                                <img src={Logo} alt="Logo" />
                                <hr></hr>
                            </div>
                            <div className="socilaLogo">
                                <AiFillFacebook size={30} />
                                <BsTwitter size={30} />
                                <FaLinkedinIn size={30} />
                                <AiFillYoutube size={30} />
                                <AiFillInstagram size={30} />
                                <BsWhatsapp size={30} />
                            </div>
                            <div>
                                <h2>&nbsp;</h2>
                                <h2>1.5M +</h2><h4>&nbsp;</h4>
                                <h5>Followers</h5><h5>&nbsp;</h5>
                                <h5>For any queries</h5>
                                <h5>Email:</h5>
                                <h5>Contact No:</h5>
                            </div>
                        </div>
                        <div className="cause">
                            <h2>Causes</h2><h2>&nbsp;</h2>
                            <h5>Medical Crowdfunding</h5><h3>&nbsp;</h3>
                            <h5>Cancer Crowdfunding</h5><h3>&nbsp;</h3>
                            <h5>Transplant Crowdfunding</h5><h3>&nbsp;</h3>
                            <h5>Education Crowdfundng</h5><h3>&nbsp;</h3>
                            <h5>Sports Crowdfunding</h5><h3>&nbsp;</h3>
                            <h5>Child Welfare</h5><h3>&nbsp;</h3>
                            <h5>Animal Fundraiser</h5>

                        </div>
                        <div className="work">
                            <h2>How it works?</h2><h2>&nbsp;</h2>
                            <h5>Fundraising for NGOs</h5><h3>&nbsp;</h3>
                            <h5>Sponsor A Child</h5><h3>&nbsp;</h3>
                            <h5>Fundraising Tips</h5><h3>&nbsp;</h3>
                            <h5>What is Crowdfunding?</h5><h3>&nbsp;</h3>
                            <h5>Corporates</h5><h3>&nbsp;</h3>
                            <h5>Withdraw Funds</h5><h3>&nbsp;</h3>
                            <h5>Browse Fundraiser</h5>
                        </div>
                        <div className="aboutus">
                            <h2>About Us</h2><h2>&nbsp;</h2>
                            <h5>Team Masoom Trust</h5><h3>&nbsp;</h3>
                            <h5>In The News</h5><h3>&nbsp;</h3>
                            <h5>Our Partners</h5><h3>&nbsp;</h3>
                            <h5>Careers</h5><h3>&nbsp;</h3>
                            <h5>Masoom Trust Blog</h5><h3>&nbsp;</h3>
                            <h5>Success Stories</h5>
                        </div>
                        <div className="support">
                            <h2>Support</h2><h2>&nbsp;</h2>
                            <h5>Medical Finance</h5><h3>&nbsp;</h3>
                            <h5>FAQs & Help Center</h5><h3>&nbsp;</h3>
                            <h5>Are Masoom Trusts Genuine?</h5><h3>&nbsp;</h3>
                            <h5>Fundraiser Video</h5><h3>&nbsp;</h3>
                            <h5>Trust & Safety</h5><h3>&nbsp;</h3>
                            <h5>Plans & Pricing</h5><h3>&nbsp;</h3>
                            <h5>Contact Us</h5>
                        </div>
                    </div>
                    <div className="paymentImg">
                        <img src={VISA} alt="Visa" />
                        <img src={MASTERCARD} alt="MasterCard" />
                        <img src={AmericanExpress} alt="American Express" />
                        <img src={Rupay} alt="Rupay" />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;
