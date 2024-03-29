import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90vh;
  align-self: center;
  position: relative;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BottomContainer = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0px;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: #2c1e49;
  @media (max-width: 770px) {
    flex-direction: row;
    flex-wrap: wrap;
    height: 35%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.p`
  font-size: 15px;
  color: #858090;
  font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;
`;
export const ContentText = styled(ContentTitle)`
  color: white;
  text-transform: none;
`;
export const CopyRight = styled(ContentTitle)`
  color: white;
  position: absolute;
  bottom: 10px;
  text-transform: capitalize;
  font-size: 13px;
  @media (max-width: 770px) {
    font-size: 10px;
  }
`;
