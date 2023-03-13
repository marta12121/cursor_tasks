import React from 'react';
import './Post.css';

const Post=({
    author_image, 
    author_name,
    author_nick,
    post_date,
    content, 
    image,
    tick,
    comment,
    like,
    like_count,
    share,
    share_count,
    download,
    comment_count} )=> {
    return(
        <div className='post'>
            <img className='author_image' src={author_image} alt="Author-Avatar" />
            <div className='post-content'>
                <div className='post-header'>
                    <h4 className='author_name'>{author_name}</h4>
                    <img className='tick' src={tick} alt="Author-Avatar" />
                    <span className='author_nick'>{author_nick}</span>
                    <span className='post_date'>{post_date}</span>
                </div>
                <p className='content'>{content}</p>
                <div>
                    <img className='post-img' src={image} alt="Author-Post" />
                </div>
                <div className='post-actions'>
                    <div className='social'>
                        <img className='icon' src={comment} alt="Comment" /><a href="">{comment_count}</a>
                    </div>
                    <div className='social'>
                        <img className='icon' src={share} alt="Share" /><a href="">{share_count}</a>
                    </div>
                    <div className='social'>
                        <img className='icon' src={like} alt="Like" /><a href="">{like_count}</a>
                    </div>
                    <div className='social'>
                        <img className='icon' src={download} alt="Download" /><a href=""></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Post;