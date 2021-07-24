
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";


const Transactions = () => {
    return (<>
        <Card >
            <Card.Body>
                <Card.Title><b>Transacciones</b></Card.Title>
                <Card.Text>
                    Aqui puedes realizar transferencias a cuentas propias y de terceros
                </Card.Text>
                <Link to="/transactions">
                    <Button variant="secondary">Ir a Transacciones</Button>
                </Link>
            </Card.Body>
        </Card>
    </>);
}

export default Transactions;