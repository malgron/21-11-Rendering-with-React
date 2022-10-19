import React from "react";
import "./Header.css";

function Header({name, imageSrc, birthday}) {
 return (
    <header>
      <div>
        <img className="img" src={imageSrc} />
      </div>
      <div>
        <h1>{name}</h1>
        <h2>{birthday}</h2>
      </div>
    </header>      
  );
}

export default Header;
