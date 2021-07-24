import React, { useState } from "react";
import { useDispatch } from "react-redux";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import { signUp } from "../../store/actions/authActions";

const SignUp = () => {

  const dispatch = useDispatch();
  const [user, setUser] = useState({
    name: "",
    identification: "",
    password: "",
  });

  const [error, setErrors] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    var reg = new RegExp('^[0-9]+$');
    if(!reg.test(user.password) || user.password.length != 4 ) {
      setErrors("La clave debe contener 4 digitos y sólo números");
      return;
    } else if(!user.name) {
      setErrors("El nombre de usuario es requerido");
      return;
    } else if(!user.identification) {
      setErrors("La identificación es requerida");
      return;
    }
    else {
      setErrors(null);
    }
  
    dispatch(signUp(user));
  };

  return (
    <>
    <Card >
      <Card.Body>
      <Card.Title as="h1">
        Registro de Usuario
      </Card.Title>
      <br></br>

        { error ?
          <Alert variant="warning">
              {error}
          </Alert>
        : null }

        <Form
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit} >

            <Form.Group>
                <Form.Control
                    type="text"
                    placeholder="Nombre"
                    required
                    value={user.name}
                    onChange ={(e) => setUser({ ...user, name: e.target.value })}  />
            </Form.Group>
            
            <br></br>
            
            <Form.Group>
                <Form.Control
                    type="number"
                    placeholder="Identificación"
                    required
                    value={user.identification}
                    onChange={(e) => setUser({ ...user, identification: e.target.value })}  />
            </Form.Group>

            <br></br>

            <Form.Group>
                <Form.Control
                    type="password"
                    placeholder="Clave"
                    required
                    value={user.password}
                    onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </Form.Group>

            <br></br>

          <Button variant="primary" type="submit" >
            Crear
          </Button>

        </Form>
      </Card.Body>
    </Card>
    </>
  );
};

export default SignUp;
