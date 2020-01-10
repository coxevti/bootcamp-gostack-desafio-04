import React from "react";

import "./Post.css";

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
    </div>
  );
}

export default Post;
