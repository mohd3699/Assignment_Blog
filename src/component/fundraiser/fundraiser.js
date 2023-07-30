import React from "react";
import foot_1 from "../../images/foot_1.png"
import feet_1 from "../../images/feet_1.png"
import feet_2 from "../../images/feet_2.png"
import feet_3 from "../../images/feet_3.png"
import "./funraiser.css"
import { PiSwordThin } from 'react-icons/pi'
import { AiOutlineGlobal } from 'react-icons/ai'
import { TbCoins } from 'react-icons/tb'

const Fundraiser = () => {
    return (
        <>
            <div className="startFundraiser">
                <h1>Start a Fundraiser in three simple steps</h1>
                <div className="startFundraiser_step">
                    <div className="stepImg">
                        <div className="stepImg_1">
                            <img src={foot_1} alt="foot_1 Image" className="foot_1" />
                            <h1 className="stepNumaber">1.&nbsp; </h1>
                            <h1 className="step1">Start your fundraiser</h1>
                            <h1>&nbsp; <PiSwordThin /></h1>
                            <img src={feet_1} alt="feet_1 Image" className="feet_1" />
                        </div>
                        <div className="stepImg_2">
                            <div className="stepImg_2_inner">
                                <h2>It’ll take only 2 minutes. Just tell us a few details about you and the ones you are raising funds for.</h2>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="step_2">
                            <h1>2.&nbsp; </h1>
                            <h1 className="step2">Share your fundraiser </h1>
                            <h1>&nbsp;<AiOutlineGlobal /></h1>
                        </div>
                        <div>
                            <div className="step_2_main">
                                <img src={feet_2} alt="feet_2 Image" className="feet_2" />
                            </div>
                            <div className="step_2_para">
                                <div className="step_2_para_inner">
                                    <h2>All you need to do is share the fundraiser with your friends and family. In no time, support will start pouring in.</h2>
                                    <h6>Share your fundraiser directly from dashboard on social media.</h6>
                                </div>
                            </div>
                            <div className="feet_3">
                                <img src={feet_3} alt="feet_2 Image" className="feet_3" />
                            </div>
                        </div>
                    </div>
                    <div className="step_3_main">
                        <div className="step_3">
                            <h1>3. &nbsp;</h1>
                            <h1 className="step3">Withdraw Funds</h1>
                            <h1>&nbsp; <TbCoins /></h1>
                        </div>
                        <div className="step_3_para_inner">
                            <h2>The funds raised can be withdrawn without any hassle directly to your bank account.</h2>
                            <h6>It takes only 5 minutes to withdraw funds on ketto.</h6>
                        </div>
                    </div>
                    <div className="buttonforfund_talk">
                        <button className="btn1_fund">
                            START A FUNDRASIERFOR FREE
                        </button>
                        <button className="btn2_talkus">
                            TALK TO US
                        </button>
                    </div>
                    <div className="chatwithUS">
                        <h3>Have any questions for us? Chat with our team on Facebook or WhatsApp now.
                            CHAT WITH US</h3>
                        <button>CHAT WITH US</button>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Fundraiser;