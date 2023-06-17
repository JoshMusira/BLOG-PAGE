import React from 'react'
import './header.css'
import homelogo from '../../assets/images/alley.jpg'
const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className="headerTitlesm">
                    FIND YOUR PREFFERED BLOG...
                </span>
                <span className='headerTitleLg'>What's your electronic preferenced  say about you and your personality.</span>

            </div>
            <img className='headerImg' src={homelogo} alt="" />

        </div>
    )
}

export default Header