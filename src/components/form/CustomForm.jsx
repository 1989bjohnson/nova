import { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CustomForm = () => {

  return (
    <>
      <h1>Form</h1>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formCategory">
          <Form.Label column sm={2}>
            Category
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formTemplate">
          <Form.Label column sm={2}>
            Template
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formDocumentTitle">
          <Form.Label column sm={2}>
            Document Title
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formJiraTicket">
          <Form.Label column sm={2}>
            Jira Ticket
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formSite">
          <Form.Label column sm={2}>
            Site *
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" />
          </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="mx-3">
          Submit
        </Button>
        <Button variant="secondary" type="reset" className="mx-3">
          Clear
        </Button>
      </Form>
    </>
  );
};

export default CustomForm;
