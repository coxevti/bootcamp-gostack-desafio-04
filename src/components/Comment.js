import React from "react";

import "./Comment.css";

export default function({ data }) {
  return (
    <div className="conteinerComment">
      <img src={data.author.avatar} alt="avatar" />
      <p>
        <strong>{data.author.name}</strong> {data.content}
      </p>
    </div>
  );
}
