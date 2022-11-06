import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StateContext } from "../contexts";
export default function CreateToDo({ user, todos, dispatch}) {
 const [title, setTitle] = useState("");
 const [content, setContent] = useState("");

  
 const [post, createTodo] = useResource(
    ({ title, description, author, id, dateCreated, complete }) => ({
      url: "/todos",
      method: "post",
      data: { title, description, author, id, dateCreated, complete },
    })
  );
  
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({
          type: "CREATE_TODO",
          title,
          content,
          author: user,
          id: uuidv4(),
          time:Date(Date.now()),
        });
     dispatch({
          type: "CREATE_TODO",
          id: temp_id,
          title,
          description,
          author: user,
          dateCreated: d,
          complete: false,
        });
      setUid(uuidv4());
      }}
    >
      <br />
      <div>
        Author: <b>{user}</b>
      </div>
      <div>
        <label htmlFor="create-title">Title:</label>
        <input
          type="text"
          name="create-title"
          id="create-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          required
        />
      </div>
      <textarea
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
}
