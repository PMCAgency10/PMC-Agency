import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background-color: rgb(60, 32, 93);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding-bottom: 20px;
  min-height: 100vh;
`;
export const Text = styled.p`
  font-size: 20px;
  color: white;
`;
export const Body = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 770px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const Divider = styled.div`
  width: 5px;
  height: 125vh;
  position: absolute;
  background-color: black;
  transform: rotate(15deg);
  left: 50%;
`;

export const DividerHeader = styled.div`
  width: 5px;
  height: 25vh;
  position: absolute;
  background-color: black;
  transform: rotate(15deg);
  left: 57.2%;
`;

export const EffectsTop = styled.img`
  position: absolute;
  top: -90px;
  right: -390px;
  transform: rotate(30deg);
`;
export const EffectsBottom = styled.img`
  position: absolute;
  bottom: -10%;
  left: -570px;
  transform: rotate(-100deg);
  width: 1000px;
  height: 900px;
`;

export const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-around; */
  align-items: center;
  flex-direction: column;
  height: 50vh;
  background: linear-gradient(to right, #483275, #5f3180);
  width: 60%;
  z-index: 10;
  margin-top: 13vh;
  border-radius: 15px;
  @media (max-width: 770px) {
    height: auto;
    width: 90%;
    padding-bottom: 20px;
  }
`;
export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
  height: 100%;
  width: 100%;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
`;

export const ContentContainer = styled.div`
  width: 27%;
  background-color: #2c1e4a;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 20px;
  line-height: 1px;
  @media (max-width: 770px) {
    align-items: center;
    padding-bottom: 15px;
    width: 90%;
  }
`;

export const ContentTitle = styled.p`
  font-weight: bold;
  font-size: 25px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  @media (max-width: 770px) {
    align-items: center;
    padding-bottom: 15px;
    text-align: center;
    width: 90%;
  }
`;

export const Numbers = styled.p`
  color: #d75eff;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 25px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Description = styled.p`
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  text-align: left;
  line-height: 20px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #4a505b;
  border: 1px solid #d75eff;
  height: 35px;
  outline: none;
  color: #d75eff;
  font-weight: bold;
  border-radius: 5px;
  margin-left: 40px;
  cursor: pointer;
  @media (max-width: 770px) {
    margin-left: 0px;
  }
`;

export const BottomText = styled.p`
  font-size: 40px;
  font-weight: bold;
  margin-top: 10%;
  text-align: center;
  color: white;
  text-transform: capitalize;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  @media (max-width: 770px) {
    font-size: 20px;
  }
`;

export const BottomSmallText = styled(BottomText)`
  font-size: 15px;
  margin-top: -15px;
  @media (max-width: 770px) {
    font-size: 10px;
  }
`;
