import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <p
        style={{
          fontSize: "60px",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        Thank you for <br />
        choosing our agency
      </p>
      <p
        style={{
          fontSize: "20px",
          fontFamily: "sans-serif",
          textAlign: "center",
          fontWeight: "bold",
          marginTop: "-20px",
          color: "gray",
        }}
      >
        we received your email and we will try to reach you as soon as possible
      </p>
      <Button
        variant="contained"
        style={{ width: "200px", height: "40px" }}
        onClick={() => navigate("/")}
      >
        back to home
      </Button>
    </div>
  );
}
