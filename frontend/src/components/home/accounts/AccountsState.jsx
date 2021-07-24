
import React, { useEffect } from "react";
import Table from "react-bootstrap/esm/Table";
import Card from "react-bootstrap/esm/Card";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTransactionsAccount } from "../../../store/actions/transactionActions";
import Button from "react-bootstrap/esm/Button";

const AccountsState = () => {

    const dispatch = useDispatch();
    const accounts = useSelector(state => state.transactions);

    useEffect(() => {
        dispatch(getAllTransactionsAccount());
    }, [dispatch]);

    return (<>
        <h1><b>Cuentas propias</b></h1>
        <br></br>
        <Row>
            {accounts.accounts && accounts.accounts.map((account) => {
                return (
                    <Col md={{ span: 4 }}>
                        <Card bg="light">
                            <Card.Body>
                                <Card.Title><b>Cuenta: {account.number}</b></Card.Title>
                                <Card.Text>
                                    <b>Saldo:</b> {account.money}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                );
            })}
        </Row>

        <br></br>
        <h1><b>Transacciones</b></h1>
        <br></br>

        <Table striped bordered hover>
            <thead>
                <tr>
                <th># Referencia</th>
                <th>Origen</th>
                <th>Destino</th>
                <th>Valor</th>
                <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
            {accounts.transactions && accounts.transactions.map((transaction) => {
                return (
                    <tr>
                        <td>{transaction.reference}</td>
                        <td>{transaction.origin}</td>
                        <td>{transaction.destine}</td>
                        <td>{transaction.value}</td>
                        <td>{transaction.date}</td>
                    </tr>
                 );
                })}
            </tbody>
        </Table>

        <br></br>
        <Link to="/">
            <Button variant="outline-secondary"> Volver</Button>
        </Link>
        <br></br>
        <br></br>

    </>);
}

export default AccountsState;