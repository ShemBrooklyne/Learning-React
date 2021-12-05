import React, { useState, useEffect } from "react";
import axios from "axios";

function Comments() {
  const [comments, setComments] = useState();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      const responseComments = res.data;
      setComments(responseComments);
    });
  }, []);

  console.log(comments);

  return (
    <div className="Comments">
      <h1>Comments Listing</h1>
      {comments &&
        comments.map((comment) => {
          const { id, name, body } = comment;
          return (
            <div key={id}>
              <h5>{name}</h5>
              <h6>Posted comment: {body}</h6>
            </div>
          );
        })}
    </div>
  );
}

export default Comments;
