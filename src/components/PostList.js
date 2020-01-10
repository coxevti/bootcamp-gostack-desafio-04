import React, { Component } from "react";

import "./PostList.css";

import Post from "./Post";

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar:
            "http://icons.iconarchive.com/icons/hopstarter/halloween-avatar/256/Jigsaw-icon.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar:
                "http://icons.iconarchive.com/icons/mattahan/ultrabuuf/512/TV-Smith-icon.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar:
            "http://img11.deviantart.net/e4a2/i/2016/096/f/7/avatar_icon_by_astrolink247-d9xxs6r.jpg"
        },
        date: "04 Jun 2019",
        content: "Fala galera, beleza?",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar:
                "http://icons.iconarchive.com/icons/hopstarter/halloween-avatar/256/Witch-icon.png"
            },
            content:
              "Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios contruída!"
          },
          {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar:
                "http://icons.iconarchive.com/icons/hopstarter/halloween-avatar/512/Guy-Fawkes-icon.png"
            },
            content:
              "Que maaaaasa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          }
        ]
      }
    ]
  };

  render() {
    return (
      <div className="containerPostList">
        {this.state.posts.map(post => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    );
  }
}

export default PostList;
