import styled from "styled-components";

export const Container = styled.div`
  width: 45%;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  height: fit-content;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const SmallTittle = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #a744c8;
`;
export const MainTittle = styled.p`
  font-size: 60px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: -1px;
  @media (max-width: 770px) {
    font-size: 40px;
    width: 80%;
  }
`;

export const SmallText = styled.p`
  font-size: 18px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: -10px;
  @media (max-width: 770px) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: #a744c8;
  color: white;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  border: none;
  cursor: pointer;
  /* &:hover {
    color: #a744c8;
    background-color: white;
    border: 1px solid white;
  } */
`;
