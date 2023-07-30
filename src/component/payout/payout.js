import React from "react";
import './payout.css'
import {PiHandCoins} from 'react-icons/pi'

const Payout = () => {
    return (
        <>
            <div>
                <div className="upperDiv">
                    <h1>We provide everything you need</h1>
                </div>
                <div className="payoutHeaderMain">
                    <div className="payoutHeader">
                        <div className="headerIcon"><PiHandCoins /></div>
                        <h3>Payout</h3>
                    </div>
                    <div className="payoutPara">
                        <h5>This is your money, you can withdraw it at any point during the course of your fundraiser</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Payout;