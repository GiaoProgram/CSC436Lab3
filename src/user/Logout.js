import { useContext } from 'react'
import { StateContext } from "../contexts/StateContext";

export default 
function Logout() {
    const { state, dispatch } = useContext(StateContext);
    const{ user } = state;
    return (
        <form 
        onSubmit={(e) => {
         e.preventDefault();
         dispatch({ type: "LOGOUT" });
         return null;
      }}
    >
      Logged in as: <b>{user.username}</b>
      <input type="submit" value="Logout" />
    </form>
  );
}
