
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getThirAccounts, saveTransaction } from "../../../store/actions/transactionActions";


const TransactionsThird = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const accounts = useSelector(state => state.transactions);
    const [form, setForm] = useState({
        origin: "",
        destine: "",
        value: "",
    });
    const [error, setErrors] = useState(null);

    useEffect(() => {
        dispatch(getThirAccounts());
    }, [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.origin) {
            setErrors("La cuenta de origen es requerida");
            return;
        } else if (!form.destine) {
            setErrors("La cuenta de destino es requerida");
            return;
        } else if (form.value < 0) {
            setErrors("El valor debe ser mayor a 0");
            return;
        }
        else {
            setErrors(null);
        }

        saveTransaction(form.origin, form.destine, form.value).then(transaction => {
            history.push("/transactions/done", transaction);
        });
    };



    return (<>
        <h1><b>Transacciones</b></h1>
        <p className="text-secondary">Transferir a cuentas de terceros</p>
        <br></br>
        <Card >
            <Card.Body>

                {error ?
                    <Alert variant="warning">
                        {error}
                    </Alert>
                    : null}

                <Form
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit} >


                    <Form.Group>
                        <Form.Label>Cuenta Origen</Form.Label>
                        <Form.Control as="select"
                            value={form.origin}
                            onChange={(e) => setForm({ ...form, origin: e.target.value })} >
                            <option></option>
                            {accounts.personal?.map((account) => {
                                return (
                                    <option key={account.id} value={account.id}> {account.number} </option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                        <Form.Label>Cuenta Destino</Form.Label>
                        <Form.Control as="select"
                            value={form.destine}
                            onChange={(e) => setForm({ ...form, destine: e.target.value })} >
                            <option></option>
                            {accounts.third?.map((account) => {
                                return (
                                    <option key={account.id} value={account.id}> {account.number} </option>
                                );
                            })}
                        </Form.Control>
                    </Form.Group>

                    <br></br>

                    <Form.Group>
                        <Form.Label>Valor a Transferir</Form.Label>
                        <Form.Control
                            type="number"
                            value={form.value}
                            onChange={(e) => setForm({ ...form, value: e.target.value })} />
                    </Form.Group>

                    <br></br>

                    <Button type="submit" variant="primary">Transferir</Button>

                </Form>

            </Card.Body>
        </Card>

        <br></br>
        <Link to="/transactions">
            <Button variant="outline-secondary"> Volver</Button>
        </Link>
    </>);
}

export default TransactionsThird;