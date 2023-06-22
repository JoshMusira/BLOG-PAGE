import React from 'react'
import '../settings/settings.css'
import profileImage from '../../assets/images/4.jpeg'
import Sidebar from '../../components/sidebar/Sidebar'
import { useContext } from 'react'
import { Context } from '../../context/userContext/Context'

const Settings = () => {
    const { user } = useContext(Context)
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsTitleUpdate">Update your account</span>
                    <span className="settingsTitleDelete">Delete account</span>
                </div>
                <form className="settingsForm">
                    <label >Profile Picture</label>
                    <div className="settingsPP">
                        <img src={profileImage} alt="" />
                        <label htmlFor="fileInput">
                            <i className=" settingsPPIcon far fa-user-circle"></i>

                        </label>
                        <input type="file" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label >Username</label>
                    <input type="text" placeholder='Joshua' />
                    <label >Email</label>
                    <input type="email" placeholder='joshua@gmail.com' />
                    <label >Password</label>
                    <input type="password" />
                    <button className="settingsSubmitButton">Update</button>
                </form>
            </div>
            <Sidebar />

        </div>
    )
}

export default Settings