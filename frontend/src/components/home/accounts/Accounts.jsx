
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";

const Accounts = () => {
    return (<>
        <Card>
        <Card.Body>
            <Card.Title><b>Estado de Cuentas</b></Card.Title>
            <Card.Text>
                Aqui puedes consultar el saldo de tus cuentas
            </Card.Text>
            <Link to="/account-state">
                <Button variant="secondary">Ir a Estado de Cuenta</Button>
            </Link>
        </Card.Body>
        </Card>
    </>);
}

export default Accounts;