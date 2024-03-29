import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 45%;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const SmallText = styled.p`
  color: #a744c8;
  text-transform: uppercase;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const LargeText = styled.p`
  line-height: 60px;
  text-transform: capitalize;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 50px;
  margin-top: -1px;
  @media (max-width: 770px) {
    line-height: 50px;
    font-size: 40px;
  }
`;

export const Text = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  line-height: 20px;
  margin-top: -20px;
  @media (max-width: 770px) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  width: 230px;
  height: 55px;
  border-radius: 5px;
  border: none;
  background-color: #a744c8;
  text-transform: capitalize;
  outline: none;
  cursor: pointer;
  color: white;
  font-size: 17px;
  font-weight: bold;
  margin-top: 20px;
`;
