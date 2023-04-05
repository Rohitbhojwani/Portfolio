import React from "react";
import SchoolSharpIcon from "@mui/icons-material/SchoolSharp";
import { Typography } from "@mui/material";
import { Row } from "react-bootstrap";
import { Grid } from "@mui/material";

const styles = {
  features: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  featuress: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
  },

  text: {
    textAlign: "center",
    color: "rgba(156, 163, 175)",
    width: "80%",
    fontSize: "1.2rem",
  },
};

function Education() {
  return (
    <Grid
      container
      xs={12}
      sx={{
        height: "90vh",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        mb: "10rem",
      }}
    >
      {/* Section header */}
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
        <Typography
          sx={{
            color: "#000",
            textTransform: "uppercase",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
          variant="overline"
        >
          Features
        </Typography>

        <h1 className="text-xl text-gray-400">Education</h1>
      </div>

      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Grid
          item
          xs={10}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "2rem",
          }}
        >
          {/* 1st item */}
          <Grid item sx={styles.features}>
            <SchoolSharpIcon
              sx={{
                fontSize: 80,
                color: "#2952e3",
              }}
            />
            <h4 className="h4 mb-2">
              Shri Ramdeobaba College of Engineering and Management, Nagpur
            </h4>
            <Typography variant="body1" sx={styles.text}>
              B.Tech In Computer Science <br />
              2020-2024
            </Typography>
          </Grid>

          {/* 2nd item */}
          <Grid item sx={styles.features}>
            <SchoolSharpIcon
              sx={{
                fontSize: 80,
                color: "#2952e3",
              }}
            />
            <h4 className="h4 mb-2">DRB Sindhu Mahavidyalaya, Nagpur</h4>

            <Typography variant="body1" sx={styles.text}>
              Secondary -12th <br />
              2018-2020
            </Typography>
          </Grid>

          {/* 3rd item */}
          <Grid item sx={styles.features}>
            <SchoolSharpIcon sx={{ fontSize: 80, color: "#2952e3" }} />
            <h4 className="h4 mb-2">Sandipani School, Nagpur</h4>

            <Typography variant="body1" sx={styles.text}>
              Primary - 10th <br />
              2016-2017
            </Typography>
          </Grid>
        </Grid>
      </Row>
    </Grid>
  );
}

export default Education;
