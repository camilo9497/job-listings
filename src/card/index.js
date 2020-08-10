import React from "react";
import "./style.css";
import image from "../assets/eyecam-co.svg";

function Card() {
  return (
    <article>
      <div className="container-information">
        <div className="container-image">
          <img src={image} alt="" />
        </div>
        <div className="container-information-detail">
          <div className="container-company-tags">
            <h3 className="company">Photosnap</h3>
            <div className="container-tags">
              <div className="tag">
                <p>New!</p>
              </div>
              <div className="tag">
                <p>Featured</p>
              </div>
            </div>
          </div>
          <h2 className="position">Senior Frontend Developer</h2>
          <div className="container-time-location">
            <div className="container-time">
              <p>1d ago</p>
            </div>
            <div className="container-time">
              <p>Full Time</p>
            </div>
            <div className="container-time">
              <p>USA only</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-tags-filter">
        <div className="tags-filter">
          <p>Frontend</p>
        </div>
        <div className="tags-filter">
          <p>Frontend</p>
        </div>
        <div className="tags-filter">
          <p>Frontend</p>
        </div>
        <div className="tags-filter">
          <p>Frontend</p>
        </div>
        <div className="tags-filter">
          <p>Frontend</p>
        </div>
      </div>
    </article>
  );
}
export default Card;
