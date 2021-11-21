import React from "react";
import fcb from "../images/fcb.png";
import inst from "../images/instag.jpg";
import twitt from "../images/twitter.png";

const Footer = () => {
  return (
    <div>
      <p style={{ textAlign: "center", color: "darkblue" }}>Copy right @2021</p>
      <p style={{ textAlign: "center", color: "darkblue" }}>
        Contact paiement retour en haut
      </p>
      <div width="200px" style={{ display: "flex", justifyContent: "center" }}>
        <img src={fcb} alt="logo fcb" width="30px"></img>
        <img src={inst} alt="logo inst" width="30px"></img>
        <img src={twitt} alt="logo twitter" width="30px"></img>
      </div>
    </div>
  );
};

export default Footer;
