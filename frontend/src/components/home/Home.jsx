import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Accounts from "./accounts/Accounts";
import Transactions from "./transactions/Transactions";

const Home = () => {

  return (<>
    <Row>
      <Col md={{span: 6}}>
        <Transactions />
      </Col>
      <Col md={{span: 6}}>
        <Accounts />
      </Col>
    </Row>
  </>);
};

export default Home;
