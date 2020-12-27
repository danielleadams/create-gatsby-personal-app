import React from "react";
import List from "./list";

export default function Talk(props) {
  const videoUrl = "https://www.youtube.com/embed/" + props.youtubeId;

  const hasSlides = !!props.slidesUrl;

  return (
    <div className="row pb-5">
      <div className="col-12 col-sm-12 col-md-6">
        <div className="pl-5 card">
          <iframe
            src={videoUrl}
            className="card-img-top"
            height="400"
            title="video"
          ></iframe>
          <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
            <h5 className="card-title">{props.event}</h5>
            {hasSlides ? (
              <p className="card-text">
                <a href={props.slidesUrl}>Slides</a>
              </p>
            ) : (
              ""
            )}
            <List
              title="Also Given At:"
              items={props.otherEvents}
              classNames="card-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
