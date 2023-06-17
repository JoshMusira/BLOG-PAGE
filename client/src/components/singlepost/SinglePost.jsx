import React from 'react'
import '../singlepost/singlepost.css'
import singlePostImage from '../../assets/images/9.jpeg'
const SinglePost = () => {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img className='singlePostImg' src={singlePostImage} alt="" />
                <h1 className='singlePostTitle'>
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className=" singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Joshua</b>
                    </span>
                    <span className="singlePostDate">
                        1 hr ago
                    </span>
                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum ex est, soluta rem consequuntur libero molestias vel, inventore ipsum quibusdam, doloribus debitis temporibus ducimus eaque quia praesentium vitae aperiam velit distinctio voluptatibus. Velit odit odio distinctio fuga corporis asperiores perferendis possimus facilis esse, nisi, quam laudantium delectus, qui dolore vero cumque nobis ex corrupti modi consequatur. Quidem tempora beatae nisi iusto accusantium laborum deleniti nihil officia, maxime voluptate fugiat vitae commodi id, incidunt qui aspernatur placeat sapiente, consequatur optio? Fugit nihil, quaerat quam in repudiandae culpa? Aspernatur quos culpa fugit, commodi architecto minus esse laboriosam deserunt. Odit sint maxime commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima esse laborum necessitatibus natus fugit blanditiis harum suscipit. Facere necessitatibus veritatis vel vitae possimus inventore totam sint nobis distinctio perspiciatis expedita id ipsum, adipisci tempora. Nemo consequatur molestiae reprehenderit earum nobis!</p>


            </div>
        </div>
    )
}

export default SinglePost