import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  right: 0;
  width: 45%;
  @media (max-width: 770px) {
    width: 100%;
  }
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
  @media (max-width: 770px) {
    width: 120px;
    height: 120px;
  }
`;

export const SocialMediaLogo = styled.img`
  width: 70px;
  height: 70px;
  @media (max-width: 770px) {
    width: 50px;
    height: 50px;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 80%;
  gap: 70px;
  @media (max-width: 770px) {
    gap: 50px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 30%;
  @media (max-width: 770px) {
    width: 37%;
  }
`;

export const ListTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ListRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  font-size: 15px;
  align-items: center;
  margin-top: -10px;
  gap: 15px;
  @media (max-width: 770px) {
    gap: 10px;
  }
`;

export const SocialMediaContainer = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  @media (max-width: 770px) {
    width: 44%;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  width: 100px;
  height: 100px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  width: 100%;
`;
