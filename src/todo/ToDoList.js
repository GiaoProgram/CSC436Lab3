import ToDo from "./ToDo";

export default function TodoList({ todos = [], dispatch }) {
  return (
    <div>
      {todos.map((p, i) => (
        <div key={p.id}>
          <ToDo {...p} />

          <input
            type="submit"
            value="Completed"
            onClick={(event) => {
              event.preventDefault();
              dispatch({
                type: "TOGGLE_TODO",
                id: p.id,
                check: p.check,
                completed: p.completed,
              });
            }}
          />
          <br />
          <input
            type="submit"
            value="Delete"
            onClick={(event) => {
              event.preventDefault();
              dispatch({ type: "DELETE_TODO", id: p.id });
            }}
          />
          <br />
          <label>
            Completed?
            <b> {p.check ? "YES" : "NO"} </b>
            <br />
            Completed on
            <b> {p.check ? p.completed : ""} </b>
          </label>
        </div>
      ))}
    </div>
  );
}