import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, Grid, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import React from "react";

const Accordions = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div>
      <Box
        sx={{
          background:
            "linear-gradient(to bottom, rgba(18,42, 66, .85), rgba(18,42, 66, .85)), url('https://i.ibb.co/GFtpnLT/business-people-using-their-phones.jpg') ",
          // filter: "brightness(50%)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundPosition: "center",
          paddingTop: { lg: "50px", md: "50px", sm: "50px", xs: "50px" },
          paddingBottom: { lg: "50px", md: "50px", sm: "50px", xs: "50px" },
          paddingX: "30px",
        }}
      >
        <Typography
          sx={{ fontWeight: 'bold', m: 2, color: "white"}}
          variant="h4"
          component="div"
        >
          SEE WHY CUSTOMERS LOVES <span style={{color: '#08C137'}}>OUR MOBILE</span>
        </Typography>
        <Typography sx={{ fontWeight: 400, mb: 5, color: 'text.secondary' }} variant="h6" component="div">
        DESIGNED TO PERFECTION
        </Typography>
        <Grid
          sx={{
            alignItems: "center",
            textAlign: "start",
            justifyContent: "space-evenly",
          }}
          container
          rowSpacing={1}
        >
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                marginTop: { lg: 0, md: 0, sm: 3, xs: 3 },
                position: "center",
              }}
            >
              <img
                className="vert-move"
                style={{ width: "100%" }}
                src="https://i.ibb.co/vcSF9Bc/Apple-i-Phone-12-PNG-Picture.png"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={3.5}>
            <Box
              sx={{
                marginBottom: { xs: 2, lg: 0 },
                marginLeft: { xl: 10, md: 0, lg: 0 },
              }}
            >
              <Accordion
              sx={{ backgroundColor: "transparent", color: "white" }}
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  NEW GRADIENT COLOR FINISHES
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  After years of being relegated to the sidelines in favor of modern, monochromatic design, gradients are finally back. In 2022, we expect them to have their full coming-out party and become a common element in web design. In fact, we are now seeing variation in what gradients look like and how they're used.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
              sx={{ backgroundColor: "transparent", color: "white" }}
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2bh-content"
                  id="panel2bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  FOUR-SIDED CURVED CERAMIC BODY
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  The curved ceramic back is also designed to allow the camera to better integrate with the body of the phone.  In terms of appearance, the front of the Xiaomi Mi MIX 4 uses a 6.67-inch CUP full screen, 3D micro-curved surface, a 20MP under the display
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
              sx={{ backgroundColor: "transparent", color: "white" }}
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3bh-content"
                  id="panel3bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 0 }}>
                  5000MAH HIGH-CAPACITY BATTERY
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  Its 5000mAh battery keeps your phone going longer without constant recharging, powering 13 hours of video viewing, 27 hours of call time, and 40 hours standby. A 5000 mAh battery can provide enough power to keep you gaming for hours on end.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
              sx={{ backgroundColor: "transparent", color: "white" }}
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4bh-content"
                  id="panel4bh-header"
                >
                  <Typography sx={{ width: "100%", flexShrink: 1 }}>
                  FULLY HIDDEN CAMERA LENS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                  It seems like the company is experimenting with smartphone designs that will have hidden camera lenses on both front and back. Smartphone designs with under-display selfie camera and what looks like a rotating cover for back camera lenses have been revealed.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Accordions;
