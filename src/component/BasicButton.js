import * as React from "react";
import { Stack, Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme2 } from "../Theme";
import { Menu, Grid } from "@mui/material";
import Fade from "@mui/material/Fade";
import Categories from "./Categories";
import { Link } from "react-router-dom"


function BasicButtons() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={myTheme2}>
      <Stack
        sx={{ display: "flex", flexWrap: "nowrap", justifyContent: "center" }}
        spacing={2}
        direction="row"
      >
        <Link refresh="true" to="/categories" style={{ textDecoration: 'none' }}><Button id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="contained">Categories</Button></Link>
        <Link refresh="true" to="/ingredients" style={{ textDecoration: 'none' }}><Button variant="contained">Ingredients</Button></Link>
        <Link refresh="true" to="/randomRecette" style={{ textDecoration: 'none' }}><Button onClick={<Link refresh="true" to="/randomRecette" style={{ textDecoration: 'none' }}></Link>} variant="contained">Grrr’andom recipe !</Button></Link>
        <div>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            sx={{ width: '80%' }}
            style={{}}
          >
            <Grid container>
              <Categories /></Grid>
          </Menu>
        </div>
      </Stack>
    </ThemeProvider>
  );
}
export default BasicButtons;
