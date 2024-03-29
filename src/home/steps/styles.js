import styled,{keyframes,css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 80vh;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  @media (max-width: 770px) {
    height: 160vh;
  }
`;
export const Wrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 60px;
  height: 80%;
  @media (max-width: 770px) {
    flex-direction: column;
    width: 60%;
    height: 95%;

  }
`;
const AnimateStep = keyframes`
  0% {
    opacity: 0;
    margin-top:-60px;
  }
  100% {
    opacity: 1;

    margin-top:0px;
  }
`;
const AnimateStep2 = keyframes`
  0% {
    opacity: 0;
    margin-bottom:-60px;
  }
  100% {
    opacity: 1;

    margin-bottom:0px;
  }
`;

const AnimationLeft = keyframes`
  0% {
    margin-left: -150px;

  }
  100% {
    margin-left: 0px;
  }
`;
const AnimationRight = keyframes`
  0% {
    margin-right: -150px;

  }
  100% {
    margin-right: 0px;
  }
`;
export const StepContainer = styled.div`
  height: ${(props) => props.height};
  background-color: #2C3037;
  width: 100%;
  border-radius: 50px;
 flex-direction: column;
  display: ${props=>props.display?"flex":"none"};
  animation: ${props=>props.animate==="top"?css`0.8s ease-in-out ${AnimateStep}`:css`0.8s ease-in-out ${AnimateStep2}`}; 
  @media (max-width: 770px) {
    height:100%;
    animation: ${props => props.index % 2 === 0 ? AnimationRight : AnimationLeft} 0.8s ease-in-out;
  }
`;


export const StepWrapper = styled.div`
  height: 100%;
  flex: 1;
  align-items: ${(props) => props.align};
  justify-content: center;
  transform-origin: center;
  display: flex;
  @media (max-width: 770px) {
    align-items: center;
  }
`;

export const Counter = styled.span`
  font-size:30px;
  color: white;
  font-weight:600;
  margin-left: 10%;
  margin-top: 10%;
  @media (max-width: 770px) {
    font-size:27px;
  }
`;
export const Title = styled.span`
  font-size:30px;
  color: #D75EFF;;
  font-weight:600;
  margin-left: 10%;
  margin-top: 5px;
  @media (max-width: 770px) {
    font-size:27px;
  }

`;

export const Description = styled.span`
  font-size: 20px;
  color: white;
  font-weight:400;
  margin-left: 10%;
  width: 60%;
  margin-top: 10px;
  @media (max-width: 770px) {
    font-size:15px;
  }
  
`;

export const TitleContainer = styled.div`
display  :flex ;
align-items: center;
gap:7px;
width: 88%;
margin-top: 40px;

`;

export const Title1 = styled.span`
color:#2C3037;
font-weight: 700;
font-size:30px;
@media (max-width: 770px) {
    font-size:18px;
  }
  
`;
export const Title2 = styled.span`
color:#D75EFF;
font-weight: 700;
font-size:30px;  
@media (max-width: 770px) {
    font-size:18px;
  }
  
`;


export const Finally = styled.div`
    width: 45%;
    height:30vh;
    border-radius: 50px;
    gap:15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    border: 1px solid #2C3037;
    margin-bottom: 40px;
    @media (max-width: 770px) {
        width: 80%;
        height:20vh;

  }
`;

export const Text1 = styled.span`
    font-size: 30px;
    font-weight: 550;
    color:#2C3037;
    @media (max-width: 770px) {
        font-size: 25px;
  }
`;
export const Text2 = styled.span`
    font-size: 23px;
    font-weight: 450;
    color:#2C3037;
    width: 70%;
    text-align: center;
    @media (max-width: 770px) {
        font-size: 17px;
  }
`;