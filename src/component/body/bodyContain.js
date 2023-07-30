import React from "react";
import './bodycontain.css'
import FirstImage from '../../images/1.png'
import SecondImage from '../../images/2.png'
import Logo from '../../images/logo.png'
import { BiSolidUser } from 'react-icons/bi'
import { MdSendToMobile } from 'react-icons/md'
import { AiFillCaretDown } from 'react-icons/ai'
import FourthImage from '../../images/4.png'
import FifthImage from '../../images/5.png'
import SeventhImage from '../../images/7.png'

const BodyContain = () => {
    return (
        <>
            <div>
                <div className="bodyHeading">
                    <div className="bodyHeadingInner">
                        <h1>
                            Raising Funds was never this easy. Start a fundraiser in 5 minutes!
                        </h1>
                    </div>
                </div>
                <div className="containAndSignIn">
                    <div className="containAndSignIn_Contain">
                        <div className="containAndSignIn_Contain_upper">
                            <div className="containAndSignIn_Contain_upper_main_1">
                                <div className="containAndSignIn_Contain_upper_1">
                                    <div className="containAndSignIn_Contain_upper_1_1">
                                        <div>
                                            <h4>20 Lakh+</h4>
                                        </div>
                                        <div>
                                            <h6>
                                                DONER
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="containAndSignIn_Contain_upper_1_1">
                                        <div>
                                            <h4>1 Lakh+</h4>
                                        </div>
                                        <div>
                                            <h6>
                                                FUNDRASIER
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="containAndSignIn_Contain_upper_1_1" style={{ border: "none" }}>
                                        <div>
                                            <h4>0%</h4>
                                        </div>
                                        <div>
                                            <h6>
                                                PLATFORM FEE
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="containAndSignIn_Contain_upper_main_photo">
                                    <img src={FirstImage} alt="First Image" />
                                </div>
                            </div>
                            <div className="containAndSignIn_Contain_upper_main_2">
                                <button className="containAndSignIn_Contain_upper_main_1_button">
                                    Donate Now
                                </button>
                            </div>
                            <div className="containAndSignIn_Contain_upper_main_3">
                                <img src={SecondImage} alt="Second Image" />
                            </div>
                        </div>
                        <div className="containAndSignIn_Contain_down">
                            <div className="containAndSignIn_Contain_upper">
                                <div className="containAndSignIn_Contain_upper_main_1">
                                    <div className="containAndSignIn_Contain_upper_1">
                                        <div className="containAndSignIn_Contain_upper_1_1">
                                            <div>
                                                <h4>12 Lakh+</h4>
                                            </div>
                                            <div>
                                                <h6>
                                                    DONER
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="containAndSignIn_Contain_upper_1_1">
                                            <div>
                                                <h4>2 Lakh+</h4>
                                            </div>
                                            <div>
                                                <h6>
                                                    FUNDRASIER
                                                </h6>
                                            </div>
                                        </div>
                                        <div className="containAndSignIn_Contain_upper_1_1" style={{ border: "none" }}>
                                            <div>
                                                <h4>0%</h4>
                                            </div>
                                            <div>
                                                <h6>
                                                    PLATFORM FEE
                                                </h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="containAndSignIn_Contain_down_main_2">
                                    <button className="containAndSignIn_Contain_down_main_1_button">
                                        Donate Now
                                    </button>
                                    <img src={FourthImage} alt="Fourth Image" />
                                </div>
                                <div className="containAndSignIn_Contain_down_main_3">
                                    <img src={SeventhImage} alt="Seventh Image" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="containAndSignIn_SignIn">
                        <div className="containAndSignIn_SignIn_Header">
                            <div>
                                <img src={Logo} alt="Logo" />
                            </div>
                            <div>
                                <h1>We know you are in urgent need of funds.</h1>
                            </div>
                            <div>
                                <h5>Our personal fundraiser expert is waiting to get you started!</h5>
                            </div>
                        </div>
                        <div className="containAndSignIn_SignIn_SignIn">
                            <div className="userName_mobile_fund">
                                <div className="userName_icon">
                                    <BiSolidUser />
                                </div>
                                <h3 className="userName_label">Username</h3>
                            </div>
                            <div className="userName_mobile_fund">
                                <div className="userName_icon">
                                    <MdSendToMobile />
                                </div>
                                <label className="userName_label">Enter Your Mobile Number</label>
                            </div>
                            <div className="userName_mobile_fund">
                                <div className="userName_icon">
                                    <AiFillCaretDown />
                                </div>
                                <label className="userName_label">What will be Fund use for?</label>
                            </div>
                            <div className="containAndSignIn_SignIn_SignIn_button">
                                <div className="containAndSignIn_SignIn_SignIn_button_para">
                                    <p>
                                        102 People started a fundraiser in last 2 days
                                    </p>
                                </div>
                                <button className="btn_whatssapp">CONNTECT ON WHATSAPP</button>
                                <button className="btn_getCall">GET CALL</button>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="crowdfunding">
                    <div className="crowdfunding_1">
                        <h1>What is Crowdfunding</h1>
                        <h2>
                            In its simplest form, Crowdfunding is a practice of giving monetary funds to overcome specific social, cultural, or economic hurdles individuals face in their daily lives.
                        </h2>
                    </div>
                    <div className="crowdfunding_1_img">
                        <img src={FifthImage} alt="Fifth Image" />
                    </div>
                </div>
                <div className="monsoonTrust">
                    <h1>So how does Crowdfunding work On Masoom Trust?</h1>
                    <h3>Let us assume an individual, unfortunately, meets with an accident on the road. His medical expenses and hospital bills start piling up. Now he needs ₹5 Lakh to pay his expensive medical bills. Fortunately, his best friend signed up on Masoom Trust crowdfunding platform, completed the process of submitting valid documents needed for verification. In a few minutes, he created a crowdfunding campaign to raise funds for his friend’s medical expenses. Now, this campaign can be shared with all his near and dear ones through WhatsApp, Instagram, Twitter, Facebook and E-mail. In a matter of few minutes, funds start coming in to support the financial needs of the injured friend.</h3>
                </div>
                
            </div>
        </>
    )
}
export default BodyContain;