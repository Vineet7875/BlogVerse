import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const navigate = useNavigate();
    const handleAboutClick = () => {
        navigate('./About')
    }
    const handleBlogsClick = () => {
        navigate('./AllBlogs')
    }
    const handlePublishClick = () => {
        navigate('./PublishPage')
    }
    return (
        <div className='footer-container'>
            <footer className="footer">
                <div className="footer__logo">
                    <img src="logo3.png" alt="Logo" />
                </div>
                <div className="footer__about">
                    <h3>About Us</h3>
                     <p>Hello and welcome to BlogVerse, the platform where you can find resourceful articles for mastering the basics and beyond in all categories of blogs.</p><br />
                    <p>Our goal is to provide a diverse and engaging platform where people can share their experiences, knowledge, and opinions with a global audience."</p><br />
           
                </div>
                <div className="footer__links">
                    <h3>Links</h3>
                    <ul>
                        <li><a onClick={() => handleAboutClick()}>About</a></li>
                        <li><a onClick={() => handleBlogsClick()}>Blogs</a></li>
                        <li><a onClick={() => handlePublishClick()}>Publish</a></li>
                    </ul>
                </div>

            </footer>
            <hr />
            <div className='copyright'><span>© Copyright 2023</span> <span id='techblog'>BlogVerse</span><span> All Rights Reserved.</span></div>
        </div>

    );
}

export default Footer;
