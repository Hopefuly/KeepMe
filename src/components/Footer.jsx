import React from "react";

class Footer extends React.Component {
  render() {
    const year = new Date().getFullYear();
    return (
      <footer>
        <p>Copyright Ilham with Sanbercodeⓒ {year}</p>
      </footer>
    );
  }
}

export default Footer;
