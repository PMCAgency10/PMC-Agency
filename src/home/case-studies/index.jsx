import React, { useState } from "react";
import {
  Container,
  Image,
  LeftSection,
  RightSection,
  Text,
  Title,
} from "./styles";
import image1 from "../../static/caseStudies.webp";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      style={{ overflowY: "scroll", scrollbarWidth: "none" }}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CaseStudies() {
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div
      style={{ width: "100%", display: "flex", flexDirection: "column" }}
      id="case-studies"
    >
      <Title>Latest case studies</Title>
      <Container>
        <LeftSection>
          <div style={{ width: "100%" }}>
            <Image src={image1} />
          </div>
        </LeftSection>
        <RightSection>
          <Box
            sx={{ borderBottom: 1, borderColor: "divider" }}
            style={{ width: "70%" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              style={{ width: "100%" }}
            >
              <Tab
                label="Item One"
                {...a11yProps(0)}
                style={{ width: "33%" }}
              />
              <Tab
                label="Item Two"
                {...a11yProps(1)}
                style={{ width: "33%" }}
              />
              <Tab
                label="Item Three"
                {...a11yProps(2)}
                style={{ width: "33%" }}
              />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            soluta dolor, voluptatum cupiditate sed odio, omnis adipisci
            distinctio eveniet facere tenetur culpa explicabo neque. Error nobis
            sint itaque dolorum placeat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Fugiat soluta dolor, voluptatum cupiditate sed
            odio, omnis adipisci distinctio eveniet facere tenetur culpa
            explicabo neque. Error nobis sint itaque dolorum placeat. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Fugiat soluta
            dolor, voluptatum cupiditate sed odio, omnis adipisci distinctio
            eveniet facere tenetur culpa explicabo neque. Error nobis sint
            itaque dolorum placeat. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Fugiat soluta dolor, voluptatum cupiditate sed
            odio, omnis adipisci distinctio eveniet facere tenetur culpa
            explicabo neque. Error nobis sint itaque dolorum placeat.
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            distinctio eveniet facere tenetur culpa explicabo neque. Error nobis
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat
            sint itaque dolorum placeat. soluta dolor, voluptatum cupiditate sed
            odio, omnis adipisci
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </RightSection>
      </Container>
    </div>
  );
}
