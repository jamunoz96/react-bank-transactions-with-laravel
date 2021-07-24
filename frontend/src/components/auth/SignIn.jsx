import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signIn } from "../../store/actions/authActions";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

const SignIn = () => {

  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
    identification: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signIn(creds.identification, creds.password));
  };

  return (
    <>
    <Card >

      <Card.Body>

      <Card.Title as="h1">
        Inicio de sesión
      </Card.Title>

      <br></br>
        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} >

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Identificación"
                    value={creds.identification}
                    onChange={(e) => setCreds({ ...creds, identification: e.target.value })} />
            </Form.Group>

            <br></br>

            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Clave"
                    value={creds.password}
                  onChange={(e) => setCreds({ ...creds, password: e.target.value })} />
            </Form.Group>
            
            <br></br>

          <Button
            variant="primary"
            type="submit" >
            Entrar
          </Button>

        </Form>
      </Card.Body>
    </Card>
    </>
  );
};

export default SignIn;
