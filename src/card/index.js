import React from "react";
import "./style.css";

function Card(props) {
  let languages = [];
  let tools = [];
  if (props.languages) {
    languages = props.languages;
  }
  if (props.tools) {
    tools = props.tools;
  }
  languages = [...languages, ...tools];

  return (
    <article>
      <div className="container-information">
        <div className="container-image">
          <img src={props.logo} alt="" />
        </div>
        <div className="container-information-detail">
          <div className="container-company-tags">
            <h3 className="company">{props.company}</h3>
            <div className="container-tags">
              {props.new === true ? (
                <div className="tag">
                  <p>New!</p>
                </div>
              ) : null}
              {props.featured === true ? (
                <div className="tag">
                  <p>Featured</p>
                </div>
              ) : null}
            </div>
          </div>
          <h2 className="position">{props.position}</h2>
          <div className="container-time-location">
            <div className="container-time">
              <p>{props.postedAt}</p>
            </div>
            <div className="container-time">
              <p>{props.contract}</p>
            </div>
            <div className="container-time">
              <p>{props.location}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-tags-filter">
        {props.role && (
          <div className="tags-filter">
            <p>{props.role}</p>
          </div>
        )}
        {props.level && (
          <div className="tags-filter">
            <p>{props.level}</p>
          </div>
        )}
        {languages &&
          languages.map((language) => {
            return (
              <div className="tags-filter">
                <p>{language}</p>
              </div>
            );
          })}
      </div>
    </article>
  );
}
export default Card;
