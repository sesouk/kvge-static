import React from 'react';
import Link from 'next/link'

const LookBook = () => {
  return (
    <div>
      <div className="navi-mobile">
        <span>
          <Link href="/">
            <img
              className="home"
              src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_60/v1525301020/web-page-home.png"
              alt="home-button"
            />
          </Link>
        </span>
      </div>
      <div className="navi-top">
        <span>
          <Link href="/">
            <img
              className="home"
              src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_60/v1525671763/web-page-home-whiteshadow.png"
              alt="home-button"
            />
          </Link>
        </span>
      </div>
      <div className="info-container">
        <div className="info">
          <p>
            The lookbook for the current collection is coming soon, please check back later for the gallery!
          </p>
          <div className="logo-holder">
            <img
              src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_200/v1524155254/logo-6-KVGE.png"
              alt="change-logo"
            />
          </div>
          <div className="logo-holder-top">
            <img
              src="https://res.cloudinary.com/kvge/image/upload/c_scale,w_200/v1525730412/logo-6-KVGE-whitesmoke.png"
              alt="change-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookBook;
