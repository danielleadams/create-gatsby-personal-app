import React from "react";
import Layout from "../components/layout";
import Talk from "../components/talk";
import { talks } from "../../data/talks.json";

export default function Speaking() {
  const talkItems = talks.map((talk, i) => {
    return (
      <Talk
        key={"talk-" + i}
        youtubeId={talk.youtubeId}
        title={talk.title}
        event={talk.event}
        slidesId={talk.slidesId}
        otherEvents={talk.additional_events}
      />
    );
  });

  return <Layout title="Speaking">{talkItems}</Layout>;
}
