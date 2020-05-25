import React from "react";
import Link from 'next/link'

const About = () => {
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
            Killer Vibes, Good Energy or better known as KVGE is a urban and
            streetwear brand founded in Denver, CO. The meaning is simple, give
            off killer vibes and good energy and you will attract the good
            things in life.
          </p>
          <p>
            The upside down delta symbol that is prevalent in many of the
            designs symbolize change is apart of life but it is up to you how to
            handle the change. Make the most out of any situation and continue
            on because life is ever changing.
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

export default About;
