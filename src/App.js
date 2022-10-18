import { useReducer } from "react";
import UserBar from "./user/UserBar";
import ToDoList from "./post/ToDoList";
import CreateToDo from "./post/CreateToDo";
import appReducer from "./reducers";
import { v4 as uuidv4 } from "uuid";

function App() {
  const initialPosts = [
    {
      title: "Test1",
      content: "test1，test1，test1",
      author: "Fan",
      id: uuidv4(),
    },
    {
      title: "test2",
      content: "test2，test2，test2",
      author: "Fan",
      id: uuidv4(),
    },
  ];

  const [state, dispatch] = useReducer(appReducer, {
    user: "",
    posts: initialPosts,
  });

  return (
    <div>
      <UserBar user={state.user} dispatch={dispatch}  />
      <ToDoList posts={state.posts} dispatch={dispatch} />
      {state.user && <CreatePost user={state.user} posts={state.posts} dispatch={dispatch}/>}

    </div>
  );
}

export default App;
