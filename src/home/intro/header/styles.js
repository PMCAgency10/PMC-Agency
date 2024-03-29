import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 15vh;
  padding: 20px;
  z-index: 100;
`;

export const Logo = styled.img`
  width: 90px;
  height: 80px;
  border-radius: 15px;
  @media (max-width: 770px) {
    width: 55px;
    height: 50px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  gap: 20px;
  line-height: 25px;

  @media (max-width: 770px) {
    line-height: 17px;
    gap: 10px;
  }
`;

export const CompanyName = styled.p`
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 770px) {
    font-size: 10px;
    /* display: none; */
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: row;
  @media (max-width: 770px) {
    gap: 10px;
  }
`;

export const MenuItem = styled.p`
  font-size: 15px;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  cursor: pointer;
  @media (max-width: 770px) {
    font-size: 13px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-radius: 10px;
  background-color: white;
  color: rgb(60, 32, 93);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  z-index: 10;
  border: none;
  cursor: pointer;
  &:hover {
    color: white;
    background-color: rgb(60, 32, 93);
    border: 1px solid white;
  }
  @media (max-width: 770px) {
    display: none:
  }
`;
