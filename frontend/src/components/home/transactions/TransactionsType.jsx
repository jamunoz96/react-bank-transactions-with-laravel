
import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";


const TransactionsType = () => {
    return (<>
    <h1><b>Transacciones</b></h1>
    <br></br>
    <Row>
        <Col md={{span: 6}}>
            <Link to="/transactions/personal"  style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Card >
                    <Card.Body>
                        <Card.Title><b className="text-secondary">Cuentas Propias</b>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>

        <Col md={{span: 6}}>
            <Link to="/transactions/third" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                <Card >
                    <Card.Body>
                        <Card.Title><b className="text-secondary">Cuentas de Terceros</b>
                        </Card.Title>
                    </Card.Body>
                </Card>
            </Link>
        </Col>
    </Row>

    <br></br>
    <Link to="/">
        <Button variant="outline-secondary"> Volver</Button>
    </Link>

    </>);
}

export default TransactionsType;