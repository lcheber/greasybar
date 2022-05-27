import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Paper } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme } from "../Theme";
import homepage from "../component/images/homepage.jpg";
import RandomHomepage from "./RandomHomepage";

export default function Homepage() {
  return (
    // carte de présentation
    <>
      <ThemeProvider theme={myTheme}>
        <div
          style={{
            display: "grid",
            justifyContent: "center",
            marginTop: "35px",
            paddingTop: "35px"
          }}
        >
          <Paper elevation={20}>
            <Card sx={{ maxWidth: 1000, maxHeight: 350 }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignContent: "Center",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={homepage}
                    style={{
                      width: "1000px",
                      display: "flex",
                      justifyContent: "space-around",
                      alignContent: "Center",
                    }}
                  />
                </CardActionArea>
              </div>
            </Card>{" "}
          </Paper>
        </div>
        <br></br>

        <CardContent>
          <Typography variant="h2" component="div" sx={{marginTop:'-30px'}}>
            Welcome to the Greasybar
          </Typography>
          <br></br>
          <Typography variant="h5" color="text.main" sx={{marginTop:'-30px', marginBottom:'35px'}}>
          From traditional cuisine to festive dishes, you can't live without fat
          </Typography>
          <Typography fontWeight="bold" fontFamily="Helvetica" variant="h3" component="div">
          We
          are
          GREASY.
          </Typography>
            <div
              style={{
                display: "grid",
                justifyContent: "center",
                width: "400px",
              }}
              className="Instructions"
            ></div>
          
        </CardContent>
        {/* Carte RandomHomepage */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginTop: "-30px",
            marginBottom: "80px"
          }}
        >
          <RandomHomepage />
          <RandomHomepage />
          <RandomHomepage />
        </div>
      </ThemeProvider>
    </>
  );
}
