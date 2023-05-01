import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

const FormTanggal = (props) => {
  const monthRef = useRef();
  const yearRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    console.log(monthRef.current.value, yearRef.current.value);

    props.getHandlerDate(monthRef.current.value, yearRef.current.value);
  };
  return (
    <Form onSubmit={submitHandler}>
      <div className="row display d-flex">
        <div className="col-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Year</Form.Label>
            <Form.Select ref={yearRef} aria-label="Default select example">
              <option>Year Select</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div className="col-5">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Month</Form.Label>
            <Form.Select ref={monthRef} aria-label="Default select example">
              <option>Pilih Bulan</option>
              <option value="1">Januari</option>
              <option value="2">Februari</option>
              <option value="3">Maret</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div className="col-2">
          <br />
          <Button className="kocak" variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default FormTanggal;
