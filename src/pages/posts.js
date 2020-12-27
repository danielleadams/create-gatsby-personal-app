import React from "react";
import Layout from "../components/layout";
import Post from "../components/post";
import { posts } from "../../data/posts.json";

export default function Posts() {
  const postItems = posts.map((post, i) => {
    return (
      <Post
        key={"post-" + i}
        url={post.url}
        date={post.date}
        title={post.title}
        image={post.image}
        intro={post.intro}
      />
    );
  });

  return <Layout title="Posts">{postItems}</Layout>;
}
