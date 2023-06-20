import React from 'react'
import './topbar.css'
import logo from '../../assets/images/4.jpeg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/userContext/Context'

const TopBar = () => {
    const { user } = useContext(Context)
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });

    };
    return (
        <div className='top'>
            <div className="topLeft">
                <span className="topLogo">JoBlog Page</span>
                {/* <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>
                <i className="topIcon fa-brands fa-square-instagram"></i>
                <i className="topIcon fa-brands fa-linkedin"></i> */}
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        {
                            user &&
                            <Link to='/' className='link'  > HOME</Link>
                        }
                    </li>
                    <li className="topListItem">
                        <Link to='/about' className='link'>ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link to='/contact' className='link'>CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        {
                            user &&
                            <Link to='/write' className='link'>WRITE</Link>
                        }
                    </li>
                    <li className="topListItem"><Link onClick={handleLogout} className='link'>{user && "LOGOUT"}</Link></li>
                </ul>
            </div>
            <div className="topRight">

                {
                    user &&
                    <Link className="link" to="/settings">
                        <img
                            className="topImg"
                            src={logo}
                            alt=""
                        />
                    </Link>
                }


                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/login">
                            LOGIN
                        </Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/register">
                            REGISTER
                        </Link>
                    </li>
                </ul>

                {/* <img className='topImg' src={logo} alt="" />
                <i className="topSearchIcon fa-sharp fa-solid fa-magnifying-glass"></i> */}
            </div>
        </div>
    )
}

export default TopBar