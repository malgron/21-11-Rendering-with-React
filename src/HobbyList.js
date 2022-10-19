import React from "react";
import "./HobbyList.css";

function HobbyList({ hobbies }) {
  if (hobbies.length === 0) {
    return null;
  } else {
    const list = hobbies.map((hobby, index) => <li key={index}>{hobby}</li>);
    return (
      <React.Fragment>
        <h4>Hobbies</h4>
        <ul>{list}</ul>
      </React.Fragment>
      );
  }
}

export default HobbyList;
