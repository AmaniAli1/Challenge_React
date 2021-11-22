import React from "react";
import { Card, Button } from "react-bootstrap";

function Car(props) {
  return (
    <div className="cardOfCars">
      {/* Cards OF CARS*/}
      <Card style={{ width: "18rem", backgroundColor: "gainsboro" }}>
        <Card.Img
          variant="top"
          src={props.children.Imgg}
          alt="photo of Car"
          height="200px"
        />
        <Card.Body>
          <Card.Title></Card.Title>
          <div style={{ textAlign: "center" }}>
            <Card.Text>
              <p>Marque :{props.children.Marque}</p>
              <p>Couleur :{props.children.Couleur}</p>
              <p>Prix :{props.children.Prix}</p>
            </Card.Text>
            <Button
              variant="primary"
              onClick={() =>
                props.showPrice(props.children.Prix, props.children.Marque)
              }
            >
              Paiement
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Car;
