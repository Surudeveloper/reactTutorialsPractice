import React from "react";
import "./About.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import config from "./includes/config.json";

const About = () => {
  return (
    <Container>
      <h3 className="my-3 text-center">Login page with react-bootstrap style</h3>
      <Form>
        {config.map(({ label, type }, ind) => {
          return (
            <Form.Group
              key={`form_abt_${ind}`}
              className="mb-3"
              controlId="exampleForm.ControlInput1"
            >
              <Row>
                <Col sm={5} className="text-end">
                  <Form.Label>
                    <b>{label}:</b>
                  </Form.Label>
                </Col>
                <Col sm={3}>
                  <Form.Control type={type} />
                </Col>
              </Row>
            </Form.Group>
          );
        })}

        <Row>
          <Col sm={{ span: 7, offset: 5 }}>
            <button className="btn btn-primary">Login</button>
          </Col>
        </Row>
        {/* <div className="row">
          <div className="offset-sm-5 col-sm-7">
            <button className="btn btn-primary">Login</button>
          </div>
        </div> */}
      </Form>
    </Container>
  );
};

export default About;
