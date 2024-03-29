import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  margin-top: -50px;
  gap: 50px;
  @media (max-width: 770px) {
    gap: 0px;
    height: 60vh;
  }
`;
export const FormContainer = styled.form`
  width: 90%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  @media (max-width: 770px) {
    height: 60vh;
  }
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  background: transparent;
  font-size: 20px;
  &::placeholder {
    font-weight: bold;
    color: black;
  }
  @media (max-width: 770px) {
    width: 300px;
    font-size: 15px;
    margin-top: 10px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 770px) {
    flex-direction: column;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 5px;
  outline: none;
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  align-self: center;
  border: 2px solid #8e3aa9;
  background-color: transparent;
  margin-bottom: 20px;
  color: black;
`;
