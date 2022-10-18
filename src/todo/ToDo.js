import {useState} from 'react';

export default function ToDo({ title, content, author, time, dispatch, user }) {
    const [check, setCheck]=useState(false);
    const [completed, setCompleted]=useState("");
    function update(){
      setCheck(!check);
      setCompleted(Date(Date.now()));
    }
    return (
      <div>
        <h3>{title}</h3>
        <div>{content}</div>
        <br />
        <i>
          Written by <b>{author}</b>
        </i>
        <br />
        Completed<b> {check ? complted:""}</b>
        <br />
      </div>
    );
  }