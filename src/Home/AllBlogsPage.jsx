import React, { useState } from 'react';
import '../BlogPage/Blogs.css';
import Blogs from "../JSON DATA/Blogs.json"
import { useNavigate } from 'react-router-dom';

function Work(props) {
    const { filterKeyword } = props;
    const navigate = useNavigate();
    const handleBlogClick = (blog) => {
        navigate('/BlogContent', { state: { blog } });
    };

    const [displayedBlogs, setDisplayedBlogs] = useState(3);
    // const [filterKeyword, setFilterKeyword] = useState("");

    const handleLoadMore = () => {
        setDisplayedBlogs(displayedBlogs + 2); // Increase the number of displayed blogs by 2
    };

    const filteredBlogs = Blogs.filter((blog) => {
        return blog.title.toLowerCase().includes(filterKeyword.toLowerCase()) || blog.author.toLowerCase().includes(filterKeyword.toLowerCase()) ||
            blog.date.toLowerCase().includes(filterKeyword.toLowerCase());
    });

    const handleClick = () => {
        navigate('./UnderCon')
    }
    return (
        <div className="work-container">

            <div className="blog-container">
                {filteredBlogs.slice(0, displayedBlogs).map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div>
                            <img src={blog.img} alt={blog.title} onClick={() => handleBlogClick(blog)} className="blog-img" />
                        </div>
                        <div className="blog-content-container">
                            <h2 className="blog-title1" onClick={() => handleBlogClick(blog)}>{blog.title}</h2>
                            <p className="blog-content">{blog.content1}</p>
                            <div className="blog-info">
                                <span className="blog-author">{blog.author}</span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                        </div>
                    </div>
                ))}
                {displayedBlogs < filteredBlogs.length && (
                    <div className='load-more'>
                        <button className="load-more-button" onClick={handleLoadMore}>
                            Load More
                        </button>
                    </div>
                )}
            </div>
            <div className="fixed-card">
                <h1>Topics</h1>
                <div className="card-content">
                    <button onClick={() => handleClick()} className="card-button">Technology</button>
                    <button onClick={() => handleClick()} className="card-button">Business</button>
                    <button onClick={() => handleClick()} className="card-button">Health</button>
                    <button onClick={() => handleClick()} className="card-button">Travel</button>
                    <button onClick={() => handleClick()} className="card-button">Education</button>
                </div>
            </div>
        </div>
    );
}

export default Work;
