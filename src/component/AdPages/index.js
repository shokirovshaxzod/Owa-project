import React from 'react';
import './AdPages.scss';
const AdPages = () => {
  return (
    <a
      className="ff"
      href="https://jgthms.com/css-in-44-minutes-ebook"
      target="_blank"
      rel="noreferrer">
      <div className="ff-background"></div>
      <p className="ff-text">
        <strong className="tag is-danger">New!</strong> My 44-page ebook "
        <strong>CSS in 44 minutes</strong>" is out! <span className="emoji">😃</span>
      </p>
      <span className="button is-primary is-rounded">
        <strong>Get it now →</strong>
      </span>
    </a>
  );
};

export default AdPages;
