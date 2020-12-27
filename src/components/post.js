import React from "react";

export default function Post(props) {
  const hasImage = !!props.image;

  return (
    <div className="row pb-5">
      <div className="col-12 col-sm-12 col-md-6">
        <div className="pl-5 card">
          {hasImage ? (
            <img
              src={props.image}
              className="card-image-top img-fluid"
              alt={props.altText}
            />
          ) : (
            ""
          )}
          <div className="card-body">
            <h4 className="card-title">
              <a href={props.url}>{props.title}</a>
            </h4>
            <h6 className="card-title text-muted">{props.date}</h6>
            <p className="class-text">{props.intro}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
