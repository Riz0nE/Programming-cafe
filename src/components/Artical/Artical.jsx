import React from 'react';
import './Artical.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Artical = (props) => {
    const { id, name, author, proImg, blogImg, days, minite } = props.artical;

    const markAsRead = props.markAsRead;


    return (
        <div className='artical'>
            <div className='blog-info'>
                <img src={blogImg} alt="" />
            </div>
            <div className='profile-info'>
                <div className='profile'>
                    <img src={proImg} alt="" />
                    <div className='info'>
                        <h5>{author}</h5>
                        <p>{days}</p>

                    </div>
                </div>
                <div className='icon'>
                    <p> {minite} mins read <button ><FontAwesomeIcon icon={faBookmark} /></button></p>
                </div>




            </div>
            <div>
                <h2>{name}</h2>
                <p>#beginners #programming</p>
                <button onClick={() => { markAsRead(props.artical) }} className='read-btn'>Mark as read</button>
            </div>

        </div>

    );
};

export default Artical;