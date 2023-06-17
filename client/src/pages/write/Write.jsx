import React from 'react'
import './write.css'
import writeImage from '../../assets/images/4.jpeg'

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src={writeImage} alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" fas fa-plus" ></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder='Title' id="" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder='Tell your story.....' className='writeInput writeText' ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>

        </div>
    )
}

export default Write