import React, { useState, useEffect, useRef } from 'react';
import './PublishPage.css';
import { auth } from '../Authentication/firebase';
import emailjs from '@emailjs/browser';

const PublishPage = () => {
  const form = useRef();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [profileUrl, setProfileUrl] = useState('');
  const [articleName, setArticleName] = useState('');
  const [articleContent, setArticleContent] = useState('');
  const [articleCategory, setArticleCategory] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isLoggedIn) {
      setErrorMessage('You need to be logged in to submit the form.');
      return;
    }

    if (name === '' || email === '' || articleName === '' || articleContent === '') {
      setErrorMessage('Please fill all the required fields.');
    } else {
      setErrorMessage('Thanks! Our team will review your article within 24 hrs.');
      // send email message with all form data to vineet.jadhav7875@gmail.com
      const data = {
        user_name: name,
        user_email: email,
        user_profile_img: profileUrl,
        user_article_name: articleName,
        user_article_content: articleContent,
        user_article_category: articleCategory,
        user_article_cover_img: coverUrl
      };
      emailjs //emailjs api
        .send('service_q70q7u6', 'template_i24ogvz', data, 'LK0DIRkqElhe90RxM')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.log(error.text);
        });

      form.current.reset();
      setName('');
      setEmail('');
      setProfileUrl('');
      setArticleName('');
      setArticleContent('');
      setArticleCategory('');
      setCoverUrl('');
    }
  };

  return (
    <div className='Publish' >
      <div className="publish-page" >
        <h1>Publish Your Article</h1>
        {isLoggedIn ? (
          <form ref={form} onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="name">Name*</label>
              <input name="user_name" type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="email">Email*</label>
              <input name="user_email" type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="profile-url">Any of Your Social Media Profile URL</label>
              <input
                name="user_profile_img"
                type="text"
                id="profile-url"
                value={profileUrl}
                onChange={(event) => setProfileUrl(event.target.value)}
              />
            </div>

            <div className="form-row">
              <label htmlFor="article-name">Article Name*</label>
              <input name="user_article_name" type="text" id="article-name" value={articleName} onChange={(event) => setArticleName(event.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="article-content">Article Content*</label>
              <textarea name="user_article_content" id="article-content" value={articleContent} onChange={(event) => setArticleContent(event.target.value)} required />
            </div>
            <div className="form-row">
              <label htmlFor="article-category">Article Category</label>
              <select name='user_article_category' id="article-category" value={articleCategory} onChange={(event) => setArticleCategory(event.target.value)}>
                <option value="">Select a category</option>
                <option value="Technology">Technology</option>
                <option value="Business">Business</option>
                <option value="Health">Health</option>
                <option value="Politics">Politics</option>
                <option value="Sports">Sports</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Education">Education</option>
                <option value="Science">Science</option>
                <option value="Environment">Environment</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
                <option value="Fashion">Fashion</option>
                <option value="Beauty">Beauty</option>
                <option value="Personal Development">Personal Development</option>
                <option value="Social Media">Social Media</option>
                <option value="Other">Other</option>


              </select>
            </div>
            <div className="form-row">
              <label htmlFor="cover-url">Article Cover Image URL</label>
              <input
                name="user_article_cover_img"
                type="text"
                id="cover-url"
                value={coverUrl}
                onChange={(event) => setCoverUrl(event.target.value)}

              />
            </div>
            <button type="submit">Submit</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </form>
        ) : (
          <p>Please log in to submit the form.</p>
        )}
      </div>
    </div>
  );
};

export default PublishPage;
