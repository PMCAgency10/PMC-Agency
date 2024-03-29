import React from "react";
import {
  Container,
  Image,
  ImageContainer,
  SocialMediaIcon,
  Text,
} from "./styles";
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

import video1 from "../../../static/Video1.mp4";
import youtube from "../../../static/youtube.webp";
import tiktok from "../../../static/tiktok.webp";
import video2 from "../../../static/Video2.mp4";
import useBreakpoint from "../../../utilities/mediaQuery";

export default function RightSection() {
  const isSmallScreen = useBreakpoint(770);

  return (
    <Container>
     {/* <ImageContainer
        style={{ alignSelf: !isSmallScreen && "flex-end", height: "250px" }}
      >
        <Text>182%+</Text>
        <video width="250px" height="400px" src={video1} type="video/mp4" loop border="15px" overFlow="hidden"/>
        <SocialMediaIcon src={youtube} />
      </ImageContainer>
      <ImageContainer style={{ alignSelf: !isSmallScreen && "flex-start" }}>
        <video height="900px" width="250px" src={video2} />
        <SocialMediaIcon
          src={youtube}
          style={{ top: "-20px", left: isSmallScreen && "-15px" }}
        />
        <Text>and many more</Text>
  </ImageContainer>*/}
   <Box
      component="ul"
      sx={{  flexdirection: {xs:'row',sm:'column'},justifyContent:'space-between', gap: 2, flexWrap: 'wrap',p: 0, m: 0 }}

    >
      <Card component="li"  style={{position:'absolute'}} sx={{ 
        width: { xs: '91%', md: '225px' }, 
        height: { xs: '200px', md: '200px' },
        left: {xs: 0 , md: 15},
        bottom: {xs: '20%' , md: 0} }} >
        
        <CardCover>
        
          <video
          style={{width:'100%', height:'100%', objectFit:'cover'}}
            autoPlay
            loop
            muted
          >
            <source
              src={video1}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <SocialMediaIcon
            src={youtube}
            style={{ top: "-20px", left: isSmallScreen && "-15px" }}
          />
        <CardContent>
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            
          </Typography>
        </CardContent>
      </Card>
      <Card component="li"  style={{position:'absolute', top: 5}}sx={{ 
        width: { xs: '90%', md: '225px' }, 
        height: { xs: '200px', md: '400px' },
        right: {xs: 0 , md: 30} }}>
          <CardCover>
          <video
            style={{width:'100%', height:'100%', objectFit:'cover'}}
            autoPlay
            loop
            muted
          >
            <source
              src={video2}
              type="video/mp4"
            />
          </video>
        </CardCover>
        <CardContent>
        <SocialMediaIcon
            src={tiktok}
            style={{ top: "-20px", left: isSmallScreen && "-15px" }}
          />
          <Typography
            level="body-lg"
            fontWeight="lg"
            textColor="#fff"
            mt={{ xs: 12, sm: 18 }}
          >
            
          </Typography>
        </CardContent>
      </Card>

    </Box>


    </Container>
  );
}
