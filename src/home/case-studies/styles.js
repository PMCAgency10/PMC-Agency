import styled from "styled-components";

export const Container = styled.div`
  width: 87%;
  min-height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  align-self: center;
  @media (max-width: 770px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const LeftSection = styled.div`
  width: 40%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  @media (max-width: 770px) {
    width: 100%;
  }
`;
export const RightSection = styled.div`
  width: 55%;
  display: flex;
  justify-self: flex-start;
  flex-direction: column;
  height: 400px;
  align-items: flex-start;
  @media (max-width: 770px) {
    width: 100%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 5px;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  color: #3c205d;
  margin-left: 15vh;
  @media (max-width: 770px) {
    margin-left: 8%;
  }
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  width: 65%;
  line-height: 25px;
  @media (max-width: 770px) {
    width: 100%;
  }
`;
