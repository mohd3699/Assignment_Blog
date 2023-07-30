import React from 'react'
import './figmaAssignment.css'
import { AiFillCaretDown } from 'react-icons/ai'
import { CiSearch } from 'react-icons/ci'
import Logo from '../../images/logo.png'


const ToolBar = () => {
    return (
        <>
            <div className='mainToolbarDiv'>
                <div className='toolbarLogo'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='toolbarMenu'>
                    <div className='toolbarNenu1'>
                        Browser Fundraisers
                    </div>
                    <div className='dropdownMenuSub'>
                        Fundraisers For
                        <AiFillCaretDown />
                    </div>
                    <div>
                        How it Works
                    </div>
                    <div className='menuDivder'>
                        |
                    </div>
                    <div className='toolbarMenuSearch'>
                        <div className='toolbarMenuSearchIcon'>
                            <CiSearch />
                        </div>
                        <div className='toolbarMenuSearchText'>
                            Search
                        </div>
                    </div>
                </div>
                <div className='toolbarButton'>
                    <button className='toolbarButton1'>
                        Start a Fundraisers
                    </button>
                    <button className='toolbarButton2'>
                        Sign In
                    </button>
                </div>
            </div>
        </>
    )
}
export default ToolBar;