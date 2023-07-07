import React from 'react';
import './About.css';

function About() {
    return (
        <div className='About'>
        <h1>AboutUs</h1>
        <div className="about-container">
            
            <h2>Welcome to our blogging platform!</h2>
            <p>
                Here, we provide a platform for bloggers to share their ideas, opinions, and experiences with the world. Our mission is to provide a space where bloggers can connect with their audience and create content that resonates with them.
            </p>
            <p>
                We understand the importance of having a platform that is user-friendly and accessible to everyone, which is why we have made our blogging platform easy to use and navigate. Whether you are a seasoned blogger or just starting out, our platform has everything you need to get your message out there.
            </p>
            <p>
                We believe that everyone has a story to tell and that every voice deserves to be heard. That's why we welcome bloggers from all backgrounds and encourage them to share their unique perspectives on our platform. We believe that diversity of thought is essential to creating a vibrant and engaged community.
            </p>
            <p>
                We hope that you will join us on our platform and share your voice with the world. Whether you are passionate about politics, culture, lifestyle, or any other topic, we believe that your voice deserves to be heard. So, start writing today and let your ideas take flight!
            </p>
        </div>
        </div>
    );
}

function Team() {
    return (
        <div className='Team'>
        <h1>Our Team</h1>
        <div className="team-container">
                
            <div className="card">
                <div className="profile-image">
                    <img src="vineet1.jpeg" alt="Founder" />
                </div>
                <div>
                <h3>Vineet Jadhav</h3>
                <p>Vineet Jadhav is the owner and founder of BlogVerse. An enginerring student and  specializing in frontend development, his passion lies in blogging. </p>
                </div>
                <div className="social-media-links">
                    <a href="https://www.instagram.com/thisvineet/"><i class="fa fa-instagram" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://www.facebook.com/vineet.jadhav.92/"><i className="fa fa-facebook" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://www.linkedin.com/in/vineet-jadhav-577a531b4/"><i className="fa fa-linkedin" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://twitter.com/vineet7875"><i className="fa fa-twitter" style={{ fontSize: "27px" }} ></i></a>
                </div>
            </div>
            <div className="card">
                <div className="profile-image">
                    <img src="sachin-img.jpeg" alt="Co-Founder" />
                </div>
                <h3>Sachin Bhoite</h3>
                <p>Sachin Bhoite is a passionate co-founder of BlogVerse, currently pursuing his engineering degree, and a tech enthusiast with a strong interest in blogging.</p>
                <div className="social-media-links">
                    <a href="https://www.instagram.com/itz_sachin_0.21/"><i class="fa fa-instagram" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://www.facebook.com/sachin.bhoite.1804"><i className="fa fa-facebook" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://www.linkedin.com/in/sachin-bhoite-11b001259/"><i className="fa fa-linkedin" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://twitter.com/founder_twitter/"><i className="fa fa-twitter" style={{ fontSize: "27px" }} ></i></a>
                </div>
            </div>
            <div className="card">
                <div className="profile-image">
                    <img src="rahul.jpeg" alt="CTO" />
                </div>
                <div>
                <h3>Rahul Adavkar</h3>
                <p>Rahul Adavkar is the CTO of BlogVerse. An enginerring student and  specializing in Android development, his passion lies in coding. </p>
                </div>
                <div className="social-media-links">
                    <a href="https://www.instagram.com/thisvineet/"><i class="fa fa-instagram" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://www.facebook.com/vineet.jadhav.92/"><i className="fa fa-facebook" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://www.linkedin.com/in/vineet-jadhav-577a531b4/"><i className="fa fa-linkedin" style={{ fontSize: "27px" }} ></i></a>
                    <a href="https://twitter.com/vineet7875"><i className="fa fa-twitter" style={{ fontSize: "27px" }} ></i></a>
                </div>
            </div>
        </div>
      
        </div>
    );
}

export default function Blog() {
    return (
        <div>
            <About />
            <Team />
        </div>
    );
}
