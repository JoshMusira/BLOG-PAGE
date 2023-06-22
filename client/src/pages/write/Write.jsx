import React from 'react'
import './write.css'
import writeImage from '../../assets/images/4.jpeg'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext } from 'react'
import { Context } from '../../context/userContext/Context'
import Axios from 'axios'
import { apiDomain } from '../../utils/utilsDomain'
const Write = () => {
    const { user } = useContext(Context)
    const schema = yup.object().shape({
        category_name: yup.string().required("category_name is required"),
        title: yup.string().required("title is required"),
        user_id: yup.number().required("user_id is required"),
        Content: yup.string().required("Content is required")
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    })
    const onSubmit = async (data) => {
        // console.log(data)
        Axios.post(`${apiDomain}/post`, data, {
            headers: {
                "Authorization": `${user.token}`,
            }
        }).then((response) => {
            reset();
            response.data.message && alert(response.data.message)
        }).catch((response) => {
            alert(response.data.error)
        })


    }
    return (
        <div className='write'>

            <p className='error'>{errors.user_id?.message}</p>
            <input {...register("user_id")} type="hidden" value={user.id} />
            <img className='writeImg' src={writeImage} alt="" />
            <form onSubmit={handleSubmit(onSubmit)} className="writeForm">
                <div className="writeFormGroup">
                    <label className='label' htmlFor="fileInput">Upload
                        <i className=" icon fa-solid fa-file-import"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: 'none' }} />
                    <p className='error'>{errors.category_name?.message}</p>
                    <select className="writeInputSelect" name="" id="">
                        <option value="">  Categories </option>
                        <option {...register("category_name")} value="Music">Music</option>
                        <option {...register("category_name")} value="Fashion">Fashion</option>
                        <option {...register("category_name")} value="Nature">Nature</option>
                        <option {...register("category_name")} value="Education">Education</option>
                        <option {...register("category_name")} value="Movies">Movies</option>
                        <option {...register("category_name")} value="Sports">Sports</option>
                    </select>
                    <p className='error'>{errors.title?.message}</p>
                    <input {...register("title")} type="text" placeholder='Title' id="" className="writeInput" autoFocus={true} />
                    <button type='submit' className="Submit">Publish</button>
                </div>
                <div className="textArea">
                    <p className='error'>{errors.Content?.message}</p>
                    <textarea {...register("Content")} placeholder='Tell your story.....' className='text' ></textarea>
                </div>



            </form>

        </div>
    )
}

export default Write