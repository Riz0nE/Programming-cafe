import React from 'react';
import './Bookmark.css'

const Bookmark = ({ bookmark }) => {
    let totalMin = 0;
    for (const articals of bookmark) {
        totalMin = totalMin + articals.minite;
    }

    return (
        <div className='bookmark-container'>
            <div className='time-container'>
                <h2>Spent time on reading :{totalMin} mins</h2>
            </div>
            <div >
                <h2>Bookmarked Blogs :</h2>
            </div>

        </div>
    );
};

export default Bookmark;