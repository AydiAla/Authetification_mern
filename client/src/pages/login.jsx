import React from "react";
import { Card, Form, Row, Col, Container, Button } from "react-bootstrap";

import axios from "axios";
import { useForm } from "react-hook-form";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
} from "mdb-react-ui-kit";

function App() {
  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3000/api/users/login", data) // badelt kn /users/login seulement 
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <MDBContainer
      fluid
      className="p-4 background-radial-gradient overflow-hidden"
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1
            className="my-5 display-3 fw-bold ls-tight px-3"
            style={{ color: "hsl(218, 81%, 95%)" }}
          >
            La meilleure offre <br />
            <span style={{ color: "hsl(218, 81%, 75%)" }}>
              pour votre apprentissage en ligne
            </span>
          </h1>

          <p className="px-3" style={{ color: "hsl(218, 81%, 85%)" }}>
            LinkHub est une plateforme d'apprentissage en ligne innovante conçue
            pour offrir une expérience éducative fluide et enrichissante. Avec
            une interface conviviale et une gamme diversifiée de cours, LinkHub
            offre aux apprenants l'opportunité d'élargir leurs connaissances et
            compétences. La plateforme favorise un environnement d'apprentissage
            collaboratif, encourageant l'interaction et l'engagement entre les
            étudiants
          </p>
        </MDBCol>

        <MDBCol md="6" className="position-relative">
          <div
            id="radius-shape-1"
            className="position-absolute rounded-circle shadow-5-strong"
          ></div>
          <div
            id="radius-shape-2"
            className="position-absolute shadow-5-strong"
          ></div>

          <MDBCard className="my-5 bg-glass">
            <MDBCardBody className="p-5">
              <Form className="m-3 py-3 px-4" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group as={Row}>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is required",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Invalid email address",
                      },
                    })}
                    style={{
                      borderColor: errors.email ? "red" : "", // Set border color to red if there's an error
                    }}
                  />
                  {errors?.email && (
                    <span style={{ color: "red" }}>
                      {errors.email?.message}
                    </span>
                  )}
                </Form.Group>

                <Form.Group as={Row}>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "password is required",
                      },

                      minLength: {
                        value: 8,
                        message: "password must be at least 8 characters",
                      },
                      maxLength: {
                        value: 15,
                        message: "password must be at most 15 characters",
                      },
                    })}
                    style={{
                      borderColor: errors.password ? "red" : "", // Set border color to red if there's an error
                    }}
                  />
                  {errors?.password && (
                    <span style={{ color: "red" }}>
                      {errors.password?.message}
                    </span>
                  )}
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  style={{ marginTop: "10px" }}
                >
                  Login
                </Button>
                <Button
                  variant="secondary"
                  type="reset"
                  onClick={() => reset()}
                  style={{ marginTop: "10px", marginLeft: "10px" }}
                >
                  Reset
                </Button>
              </Form>

              <div className="text-center">{/* Your existing code... */}</div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;

