import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DisplayFaq = () => {
  return (
    <div style={{marginLeft:30}}>
      <h1>FAQs:</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><b>What is time sheet verification?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Time sheet verification is the process of reviewing and confirming
            the accuracy of employee time records. This may involve verifying
            employee hours worked, ensuring proper coding of time entries, and
            ensuring compliance with company policies and government
            regulations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>Why is time sheet verification important?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Time sheet verification is important for several reasons. It helps
            ensure accurate payroll processing, ensures compliance with labor
            laws and regulations, and helps prevent time theft and fraud.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><b>How long does the verification process take?</b></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            The time it takes to verify time sheets depends on several factors,
            including the number of time sheets submitted and the complexity of
            the time sheet data. In most cases, our service can provide results
            within a few hours to a day.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default DisplayFaq;

