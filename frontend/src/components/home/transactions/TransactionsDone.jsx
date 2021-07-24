
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Alert from "react-bootstrap/esm/Alert";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";


const TransactionsDone = (props) => {

    const transaction = props.location.state.transaction;

    return (<>
    <Card >
        <Card.Body>
            <Alert variant="success">
                <h3>Transaccion exitosa</h3>
            </Alert>
            <Card.Title><b>Referencia:  </b> <span>{transaction.reference}</span></Card.Title>
            <Card.Title><b>Fecha:  </b> <span>{Date(transaction.create_at)}</span></Card.Title>
            <Card.Title><b>Valor:  </b> <span>{transaction.value}</span></Card.Title>
        </Card.Body>
    </Card>

    <br></br>
    <Link to="/transactions">
        <Button variant="outline-secondary"> Volver</Button>
    </Link>

    </>);
}

export default TransactionsDone;