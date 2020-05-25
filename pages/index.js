import React, { Component } from "react";
import Link from 'next/link'

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="logo-mobile">
            <img
              className="bogo"
              src="http://res.cloudinary.com/kvge/image/upload/c_scale,h_685/v1525298041/logo-3-KVGE.png"
              alt="box-logo"
            />
        </div>
        <div className="time-mobile"></div>
        <nav className="mobile-view">
          <ul>
            <li>
              <Link href="/lookbook">
                <button className="mobile">Spring/Summer 2020 Lookbook</button>
              </Link>
            </li>
            <li>
              <Link href="/shop">
                <button className="mobile">Shop</button>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <button className="mobile">About</button>
              </Link>
            </li>
            <li>
              <button className="mobile">Contact</button>
            </li>
          </ul>
        </nav>
        <div className="social-mobile">
          <a href="https://www.facebook.com/kvgebrand" id="fb">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525287917/facebook-logo.png"
              alt="facebook link"
            />
          </a>
          <a href="https://www.instagram.com/kvgebrand" id="ig">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525287917/512px-Instagram_simple_icon.png"
              alt="instagram link"
            />
          </a>
          <a href="https://www.twitter.com/kvgebrand" id="twitter">
            <img
              src="http://res.cloudinary.com/kvge/image/upload/v1525287917/twitter.png"
              alt="twitter link"
            />
          </a>
        </div>
        <div>
          <header className="head-desk">
              <img
                className="bogo-desk"
                src="http://res.cloudinary.com/kvge/image/upload/v1525658069/logo-3-KVGE-whiteshadow.png"
                alt="bogo"
              />
          </header>
          <div className="time-desk"></div>
          <nav className="desktop">
            <ul>
              <li>
                <Link href="/lookbook">
                  <button className="btn">Spring/Summer 2020 Lookbook</button>
                </Link>
              </li>
              <li>
                <Link href="/shop">
                  <button className="btn">Shop</button>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <button className="btn">About</button>
                </Link>
              </li>
              <li>
                <button className="btn">Contact</button>
              </li>
              <li>
                <a href="https://www.facebook.com/kvgebrand">
                  <button className="btn">Facebook</button>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/kvgebrand">
                  <button className="btn">Instagram</button>
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/kvgebrand">
                  <button className="btn">Twitter</button>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div />
      </div>
    );
  }
}
