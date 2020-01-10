import React from "react";

import "./Post.css";

import Comment from './Comment';

function Post({ data }) {
  return (
    <div className="containerPost">
      <div className="author">
        <img src={data.author.avatar} alt="" />
        <div>
          <h1>{data.author.name}</h1>
          <h2>{data.date}</h2>
        </div>
      </div>
      <p>{data.content}</p>
      {data.comments.map(comment => <Comment key={comment.id} data={comment}/>)}
    </div>
  );
}

export default Post;
