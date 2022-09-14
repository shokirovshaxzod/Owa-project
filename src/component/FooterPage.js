import React from 'react';

const FooterPage = () => {
  return (
    <footer className="sisters">
      <div className="sister sister--cssreference container">
        <h4 className="sister-title">
          Check out our sister website:
          <br />
          <strong>CSS Reference</strong> 😃
        </h4>
        <a className="sister-banner" href="https://cssreference.io">
          <img
            src="https://htmlreference.io/images/css-reference-logo.png"
            alt="CSS Reference logo"
          />
        </a>
      </div>
      <div className="sister sister--bulma container">
        <h4 className="sister-title">
          Need a CSS framework?
          <br />
          Try out <strong>Bulma</strong> 😎
        </h4>
        <a className="sister-banner" href="https://bulma.io">
          <img src="https://htmlreference.io/images/bulma-logo.png" alt="Bulma logo" />
        </a>
      </div>
    </footer>
  );
};

export default FooterPage;
