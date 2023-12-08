import React, { useEffect, useState } from 'react';
import './Blogs.css'
import Artical from '../Artical/Artical';
import Bookmark from '../Bookmark/Bookmark';

const Blog = () => {
    const [articals, setArticals] = useState([]);
    const [bookmark, setBookmark] = useState([]);


    useEffect(() => {
        fetch('bloger.json')
            .then(res => res.json())
            .then(data => setArticals(data))
    }, [])

    const markAsRead = (artical) => {
        const newBookmark = [...bookmark, artical];
        setBookmark(newBookmark)
    }




    return (
        <div className='blogs-container'>
            <div>
                {
                    articals.map(artical => <Artical
                        key={artical.id}
                        artical={artical}
                        markAsRead={markAsRead}

                    ></Artical>)
                }


            </div>
            <div className='bookmark-container'>
                <Bookmark
                    bookmark={bookmark}
                ></Bookmark>


            </div>


        </div>
    );
};

export default Blog;