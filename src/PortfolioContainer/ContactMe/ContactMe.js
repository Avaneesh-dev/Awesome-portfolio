import React, { Component } from "react";
import { Grid, Typography, Container, Divider, Card, CardContent } from "@mui/material";
import { Button, Form, FormGroup, Label, Input, Col } from "reactstrap";

class ContactForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Current State is: " + JSON.stringify(this.state));
    alert("Current State is: " + JSON.stringify(this.state));
    event.preventDefault();
  }

  render() {
    return (
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your Feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={this.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="name" md={2}>
                Name
              </Label>
              <Col md={10}>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>
            
            
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
              </Col>
            </FormGroup>            
            <FormGroup row>
              <Label htmlFor="message" md={2}>
                Your message
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  value={this.state.message}
                  onChange={this.handleInputChange}
                ></Input>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Email
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  }
}

export default function ContactMe() {
  return (
    <Grid>
      <Container>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ fontFamily: "Poppins Bold" }}
        >
          Contact Me
        </Typography>
        <Typography textAlign={"center"} sx={{ fontFamily: "Poppins Light" }}>
          Lets keep in touch
        </Typography>
        <Divider sx={{ my: 5 }} variant="middle" />
        <ContactForm />
      </Container>
    </Grid>
  );
}
