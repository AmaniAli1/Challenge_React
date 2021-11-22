import React from "react";
import Car from "./Car";
import mercedes from "../images/mercedes.jpg";
import ford from "../images/ford.jpg";
import bm from "../images/bmw.jpg";
import citroen from "../images/citr.jpg";
//fonction qui affiche le prix et la marue de la voiture
const showPrice = (price, name) =>
  alert(`Vous devez payer ${price},Pour acheter la voiture :  ${name}`);

// table of object
const voiture = [
  {
    Marque: "Mercedes",
    Couleur: "Noir",
    Prix: "120 mille $",
    Imgg: mercedes,
  },
  {
    Marque: "Ford",
    Couleur: "gris",
    Prix: "40 mille $",
    Imgg: ford,
  },
  { Marque: "BMW", Couleur: "Rouge", Prix: "80 mille $ ", Imgg: bm },
  {
    Marque: "Citroen",
    Couleur: "Blanc",
    Prix: "50 mille $",
    Imgg: citroen,
  },
];
// component qui contient la liste des voitures
const Cars = () => {
  return (
    <div
      width="800px"
      style={{
        display: "flex",
        justifyContent: "Center",
        margin: "50px 50px",
        paddingRight: "10px",
      }}
    >
      {voiture.map((car, i) => (
        <Car showPrice={showPrice}>{car}</Car>
      ))}
    </div>
  );
};

export default Cars;
