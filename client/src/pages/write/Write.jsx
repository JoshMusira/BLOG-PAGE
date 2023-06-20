import React from 'react'
import './write.css'
import writeImage from '../../assets/images/4.jpeg'

const Write = () => {
    return (
        <div className='write'>
            <img className='writeImg' src={writeImage} alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label className='label' htmlFor="fileInput">Upload
                        <i className=" icon fa-solid fa-file-import"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <input type="text" placeholder='Category' id="" className="writeInput" autoFocus={true} />
                    <input type="text" placeholder='Title' id="" className="writeInput" autoFocus={true} />
                    <button className="Submit">Publish</button>
                </div>
                <div className="textArea">
                    <textarea placeholder='Tell your story.....' className='text' ></textarea>
                </div>

            </form>

        </div>
    )
}

export default Write