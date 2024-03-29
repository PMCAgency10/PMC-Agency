import React, { useState } from "react";
import { Button, Container, FormContainer, Input, Row } from "./styles";
import { CompanyName, Logo, LogoContainer } from "../intro/header/styles";
import logoSrc from "../../static/logo.webp";

export default function Form() {
  const [userInfo, setUserInfo] = useState({});

  const handleSendEmail = () => {
    const { firstName, lastName, businessName, phoneNumber, email } = userInfo;
    var subject =
      "New Inquiry from " + firstName + " " + lastName + " - " + businessName;

    var body =
      "Dear " +
      firstName +
      " " +
      lastName +
      ",\n\n" +
      "Thank you for reaching out to us regarding your business, " +
      businessName +
      ". We appreciate your inquiry.\n\n" +
      "Here are the details you provided:\n" +
      "Phone: " +
      phoneNumber +
      "\n" +
      "Email: " +
      email +
      "\n\n" +
      "We will get back to you as soon as possible.\n\n" +
      "Best regards,\nYour Marketing Agency";

    var mailtoLink =
      "mailto:info@pledgemc.com" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  };

  const handleOnChange = ({ target: { value, name } }) => {
    setUserInfo({ ...userInfo, [name]: value });
  };
  return (
    <>
      <LogoContainer
        style={{ alignSelf: "center", lineHeight: "15px" }}
        id="form"
      >
        <Logo src={logoSrc} />
        <CompanyName style={{ color: "black", fontSize: "15px" }}>
          Pledge Media <br /> Consultancy
        </CompanyName>
      </LogoContainer>
      <FormContainer onSubmit={handleSendEmail}>
        <Container>
          <Row>
            <Input
              name="firstName"
              placeholder="First name"
              onChange={handleOnChange}
              required
            />
            <Input
              name="lastName"
              placeholder="Last name"
              onChange={handleOnChange}
              required
            />
          </Row>
          <Row>
            <Input
              name="email"
              placeholder="Email"
              onChange={handleOnChange}
              type="email"
              required
            />
            <Input
              name="phoneNumber"
              placeholder="Phone number"
              onChange={handleOnChange}
              required
            />
          </Row>
          <Row>
            <Input
              name="businessName"
              placeholder="Business name"
              onChange={handleOnChange}
              required
            />
          </Row>
        </Container>
        <Button type="submit">Send email</Button>
      </FormContainer>
    </>
  );
}
