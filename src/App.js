import { useReducer, useEffect } from "react";
import TodoList from "./components/TodoList";
import UserBar from "./user/UserBar";
import appReducer from "./reducers";
import { StateContext } from "./contexts";
import CreateTodo from "./components/CreateTodo";
import { useResource } from "react-request-hook";
import UserBar from "./user/UserBar";
function App() {
    secondaryColor: "coral",
  });

  const [todos, getTodos] = useResource(() => ({
    url: "/posts",
    method: "get",
  }));

  useEffect(getTodos, []);


  useEffect(() => {
    if (todots && posts.data) {
      dispatch({ type: "FETCH_TODOTS", todos: todos.data });
    }
  }, [todots]);

  return (
    <div>
      <StateContext.Provider value={{ state, dispatch }}></StateContext.Provider>
