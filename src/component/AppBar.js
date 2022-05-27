import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import logoUnicornKitchen12 from "../component/images/logoUnicornKitchen12.png";
import { ThemeProvider } from "@mui/material/styles";
import { myTheme, myTheme2 } from "../Theme";
import BasicButtons from "./BasicButton";
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FormControl, Button } from "@mui/material";
import { Link } from "react-router-dom"

//css barre de recherche
const CssAutocomplete = styled(Autocomplete, {
  shouldForwardProp: (props) => props !== "focusColor"
})((p) => ({
  // input label when focused
  "& label.Mui-focused": {
    color: "black"
  },
  // focused color for input with variant='standard'
  "& .MuiInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='filled'
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: p.focusColor
  },
  // focused color for input with variant='outlined'
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "black"
    }
  }
}));

//barre de recherche
function Barrederecherche() {

  const [query, setQuery] = useState('')
  const [all, setAll] = useState([])
  const [url, setUrl] = useState('')
  const navigate = useNavigate()
  const [filteredResults, setFilteredResults] = useState([]);

  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

  useEffect(() => {
    let letter = [...query]
    let copy = [...all]
    let recetteListe = []

    alphabet.forEach(elem => axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=' + elem).then((response) => {
      let interm = response.data.meals;
      if (interm !== null && interm !== undefined && interm !== "") {
        interm.forEach((elem) => {
          if (elem !== null && elem !== undefined && elem !== "") {
            copy.push(elem)
          }

        })
        setAll(copy)
      }

    }

    ));

    console.log(all)
  }, []);

  // useEffect(() => {
  //   console.log(all)
  //   console.log('Input Query >>>',query)
  // }, [query]);


  const handleChange = (e) => {
    setQuery(e)
  }

  function resultat() {
    console.log(url)
    if (url !== '') { navigate('/recette/' + url) }
  }



  return (
    <div style={{width: '1400px', display: 'flex', justifyContent: 'center', marginLeft: '1fr', marginTop: '25px'}}>
      <Stack spacing={0.5} direction='row' alignItems="center" justifyContent="center">
        <CssAutocomplete sx={{width:'42vw', backgroundColor: 'white', borderRadius: '5px'}}onChange={(e, value) => { setUrl(value.idMeal) }}
          id="free-solo-demo"
          freeSolo
          options={
            all
          }
          getOptionLabel={option => { return (option.strMeal) }}
          renderInput={(params) => <TextField {...params} label="Search a recipe" />}
        />
      <Button variant="contained" style={{ marginLeft: '5px', height: '40px' }} theme={myTheme2} onClick={resultat}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </Button>
    </Stack>
    </div>)
}




//icone barre de recherche
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "90%", //à modifier pour placer la loupe verticalement
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

//bouton login
//Fonction de l'AppBar
function ButtonAppBar(props) {
  const settingsLogged = [
    <Link refresh="true" to="api/profile" style={{ textDecoration: 'none' }}>Profile</Link>,
    <Link refresh="true" to="api/logout" style={{ textDecoration: 'none' }}>Log out</Link>
    ];

    const settingsNotLogged = [
      <Link refresh="true" to="api/login" style={{ textDecoration: 'none' }}>Log in</Link>,
      <Link refresh="true" to="api/signup" style={{ textDecoration: 'none' }}>Sign up</Link>,
      ];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    //modification theme page
    <ThemeProvider theme={myTheme}>
      <Box sx={{ flexGrow: 1 }} >
        {/* //AppBar+intégrationLogo */}
        <AppBar position="static" >
          <Toolbar>
            <Box
              border
              variant="h6"
              component="div"
              pr={0}
              height={80}
              paddingTop={3}
            >
            <a href="/">
              <img src={logoUnicornKitchen12} alt="logo" width={200} />
            </a>
            </Box>
            {/* //barre de recherche  */}
            <Barrederecherche >
              <SearchIconWrapper >
                <SearchIcon />
              </SearchIconWrapper>
            </Barrederecherche>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Log in or create an account, Fatty !">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ height: "80px", width: "80px", paddingTop: "25px"}}
                >
                  <Avatar alt="GREASYMAN" src="../images/login.png" sx={{ height: "70px", width: "70px", fontSize: "30px"}}/>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {!props.token && props.token !== "" && props.token !== undefined ?
                settingsNotLogged.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                )) : 
                settingsLogged.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>))
              }
              </Menu>
            </Box>
          </Toolbar>
          <Box
            style={{
              bottom: "-20px",
              position: "relative",
            }}
          >
            <BasicButtons />
          </Box>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
export default ButtonAppBar;
