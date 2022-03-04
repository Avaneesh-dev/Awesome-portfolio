import React from "react";
import { Grid, Typography, CssBaseline, Divider, Container} from "@mui/material";
import VerticalTabs from "./ResumeTabs";
export default function Resume() {
  return (
    <Grid>
      <Container>
        <Typography
          variant="h4"
          textAlign={"center"}
          sx={{ fontFamily: "Poppins Bold", marginTop: 5 }}
        >
          Resume
        </Typography>
        <Typography textAlign={"center"} sx={{ fontFamily: "Poppins Light" }}>
          My Formal Bio-data
        </Typography>
        <CssBaseline />
        <Divider sx={{ my: 5 }} variant="middle" />
        <VerticalTabs />
      </Container>
    </Grid>
  );
}
