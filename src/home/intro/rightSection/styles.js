import styled from "styled-components";

export const Container = styled.div`
  width: 40%;
  margin-right: 5%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 60vh;
  padding-bottom: 20px;
  position: relative;
  @media (max-width: 770px) {
    align-self: center;
    justify-content: center;
    margin-right: 0px;
    flex-direction: column;
    width: 90%;
    margin-top: 50px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 250px;
  height: 400px;
  border-radius: 10px;
  @media (max-width: 770px) {
    width: 150px;
    width: 150px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  object-fit: cover;
`;
export const SocialMediaIcon = styled.img`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  left: -30px;
  top: 15px;
  @media (max-width: 770px) {
    width: 60px;
    height: 60px;
  }
`;

export const Text = styled.p`
  color: #a744c8;
  font-weight: bold;
  font-size: 22px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: right;
  line-height: 0px;
  @media (max-width: 770px) {
    font-size: 15px;
  }
`;
