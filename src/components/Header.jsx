import React from "react";
import NotesIcon from "@material-ui/icons/Notes";

// Komponen ini merupakan sebuah header

function Header() {
  return (
    <header>
      <h1>
        <NotesIcon fontSize="medium" />
        KeepME
      </h1>
      <div className="alignRight">
        <a className="flexContent" href="/">
          Home
        </a>
        <a className="flexContent" href="/KeepMe">
          KeepME App
        </a>
        <a className="flexContent" href="/Count">
          KeepME Counting
        </a>
      </div>
    </header>
  );
}

export default Header;
